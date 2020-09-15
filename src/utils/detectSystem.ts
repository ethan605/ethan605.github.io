type SystemTypes = 'os' | 'browser';

type SystemAttribute = {
  codeName: string;
  name: string;
  versionPrefix: string;
};

type SystemInfo = {
  name: string;
  version: string;
};

const SYSTEMS_MAPPING: { [key in SystemTypes]: SystemAttribute[] } = {
  os: [
    { name: 'Windows Phone', codeName: 'Windows Phone', versionPrefix: 'OS' },
    { name: 'Windows', codeName: 'Win', versionPrefix: 'NT' },
    { name: 'iPhone', codeName: 'iPhone', versionPrefix: 'OS' },
    { name: 'iPad', codeName: 'iPad', versionPrefix: 'OS' },
    { name: 'Kindle', codeName: 'Silk', versionPrefix: 'Silk' },
    { name: 'Android', codeName: 'Android', versionPrefix: 'Android' },
    { name: 'PlayBook', codeName: 'PlayBook', versionPrefix: 'OS' },
    { name: 'BlackBerry', codeName: 'BlackBerry', versionPrefix: '/' },
    { name: 'Macintosh', codeName: 'Mac', versionPrefix: 'OS X' },
    { name: 'Linux', codeName: 'Linux', versionPrefix: 'rv' },
    { name: 'Palm', codeName: 'Palm', versionPrefix: 'PalmOS' },
  ],
  browser: [
    { name: 'Chrome', codeName: 'Chrome', versionPrefix: 'Chrome' },
    { name: 'Firefox', codeName: 'Firefox', versionPrefix: 'Firefox' },
    { name: 'Firefox iOS', codeName: 'FxiOS', versionPrefix: 'FxiOS' },
    { name: 'Safari', codeName: 'Safari', versionPrefix: 'Version' },
    { name: 'Internet Explorer', codeName: 'MSIE', versionPrefix: 'MSIE' },
    { name: 'Opera', codeName: 'OPR', versionPrefix: 'OPR' },
    { name: 'Opera Touch', codeName: 'OPT', versionPrefix: 'OPT' },
    { name: 'BlackBerry', codeName: 'CLDC', versionPrefix: 'CLDC' },
    { name: 'Mozilla', codeName: 'Mozilla', versionPrefix: 'Mozilla' },
  ],
};

const detectSystem = (systemType: SystemTypes): SystemInfo | null => {
  const userAgent = [
    window.navigator.platform,
    window.navigator.userAgent,
    window.navigator.appVersion,
    window.navigator.vendor,
  ].join(' ');

  const matchedSystems = SYSTEMS_MAPPING[systemType].map(
    ({ codeName, name, versionPrefix }) => {
      const codeNameRegex = new RegExp(codeName, 'gi');

      // No system codeNames found
      if (!codeNameRegex.test(userAgent)) {
        return null;
      }

      const versionRegex = new RegExp(
        `${versionPrefix}[-\\s\\/:;]([\\d\\._]+)`,
        'i'
      );
      const matches = userAgent.match(versionRegex);
      const version =
        matches && matches[1] ? matches[1].split(/[._]+/).join('.') : '0';

      return {
        name,
        version,
      };
    }
  );

  const compacted = matchedSystems.filter((sys) => sys);

  const opera = compacted.find((sys) => sys?.name === 'Opera');

  if (opera) {
    return opera;
  }

  return compacted[0];
};

export default detectSystem;
