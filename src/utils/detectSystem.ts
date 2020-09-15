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

const SYSTEMS_MAPPING: Record<SystemTypes, SystemAttribute[]> = {
  os: [
    {
      name: 'Windows Phone',
      codeName: 'Windows Phone',
      versionPrefix: 'Windows Phone',
    },
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
    // List of detectable browsers. Notes that their order is important!
    { name: 'BlackBerry', codeName: 'CLDC', versionPrefix: 'CLDC' },
    { name: 'Edge', codeName: 'Edg', versionPrefix: 'Edg' },
    { name: 'Opera', codeName: 'OPR', versionPrefix: 'OPR' },
    { name: 'Opera Touch', codeName: 'OPT', versionPrefix: 'OPT' },
    {
      name: 'Samsung Browser',
      codeName: 'SamsungBrowser',
      versionPrefix: 'SamsungBrowser',
    },
    { name: 'UC Browser', codeName: 'UCBrowser', versionPrefix: 'UCBrowser' },
    { name: 'Yandex', codeName: 'YaBrowser', versionPrefix: 'YaBrowser' },
    { name: 'Firefox', codeName: 'Firefox', versionPrefix: 'Firefox' },
    { name: 'Firefox iOS', codeName: 'FxiOS', versionPrefix: 'FxiOS' },
    {
      name: 'Internet Explorer Mobile',
      codeName: 'IEMobile',
      versionPrefix: 'IEMobile',
    },
    { name: 'Internet Explorer', codeName: 'MSIE', versionPrefix: 'MSIE' },
    { name: 'Internet Explorer', codeName: 'rv', versionPrefix: 'rv' },
    { name: 'Chrome', codeName: 'Chrome', versionPrefix: 'Chrome' },
    { name: 'Chrome iOS', codeName: 'CriOS', versionPrefix: 'CriOS' },
    { name: 'Safari', codeName: 'Safari', versionPrefix: 'Version' },
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

  // Return first non-nullish result
  return matchedSystems.filter((sys) => sys)[0];
};

export default detectSystem;
