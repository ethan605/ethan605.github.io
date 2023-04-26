type WebGLContext =
  | 'webgl2'
  | 'experimental-webgl2'
  | 'webgl'
  | 'experimental-webgl'
  | 'moz-webgl'
  | 'fake-webgl';

type WebGLExtensions =
  | 'WEBGL_lose_context'
  | 'WEBKIT_WEBGL_lose_context'
  | 'MOZ_WEBGL_lose_context';

const WEBGL_CONTEXTS: WebGLContext[] = [
  'webgl2',
  'experimental-webgl2',
  'webgl',
  'experimental-webgl',
  'moz-webgl',
  'fake-webgl',
];

const WEBGL_CHECK_EXTENSIONS: WebGLExtensions[] = [
  'WEBGL_lose_context',
  'WEBKIT_WEBGL_lose_context',
  'MOZ_WEBGL_lose_context',
];

const WEBGL_PARAMETERS = [
  'VERSION',
  'SHADING_LANGUAGE_VERSION',
  'VENDOR',
  'RENDERER',
  'MAX_VERTEX_ATTRIBS',
  'MAX_VERTEX_UNIFORM_VECTORS',
  'MAX_VERTEX_TEXTURE_IMAGE_UNITS',
  'MAX_VARYING_VECTORS',
  'ALIASED_LINE_WIDTH_RANGE',
  'ALIASED_POINT_SIZE_RANGE',
  'MAX_FRAGMENT_UNIFORM_VECTORS',
  'MAX_TEXTURE_IMAGE_UNITS',
  'RED_BITS',
  'GREEN_BITS',
  'BLUE_BITS',
  'ALPHA_BITS',
  'DEPTH_BITS',
  'MAX_RENDERBUFFER_SIZE',
  'MAX_VIEWPORT_DIMS',
  'MAX_TEXTURE_SIZE',
  'MAX_CUBE_MAP_TEXTURE_SIZE',
  'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
  'STENCIL_BACK_FAIL',
  'STENCIL_BACK_FUNC',
  'STENCIL_BACK_PASS_DEPTH_FAIL',
  'STENCIL_BACK_PASS_DEPTH_PASS',
  'STENCIL_BACK_REF',
  'STENCIL_BACK_VALUE_MASK',
  'STENCIL_BACK_WRITEMASK',
  'STENCIL_BITS',
  'STENCIL_CLEAR_VALUE',
  'STENCIL_FAIL',
  'STENCIL_FUNC',
  'STENCIL_PASS_DEPTH_FAIL',
  'STENCIL_PASS_DEPTH_PASS',
  'STENCIL_REF',
  'STENCIL_TEST',
  'STENCIL_VALUE_MASK',
  'STENCIL_WRITEMASK',
];

const WEBGL2_PARAMETERS = [
  'MAX_VERTEX_UNIFORM_COMPONENTS',
  'MAX_VERTEX_UNIFORM_BLOCKS',
  'MAX_VERTEX_OUTPUT_COMPONENTS',
  'MAX_VARYING_COMPONENTS',
  'MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS',
  'MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS',
  'MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS',
  'MAX_FRAGMENT_UNIFORM_COMPONENTS',
  'MAX_FRAGMENT_UNIFORM_BLOCKS',
  'MAX_FRAGMENT_INPUT_COMPONENTS',
  'MIN_PROGRAM_TEXEL_OFFSET',
  'MAX_PROGRAM_TEXEL_OFFSET',
  'MAX_DRAW_BUFFERS',
  'MAX_COLOR_ATTACHMENTS',
  'MAX_SAMPLES',
  'MAX_3D_TEXTURE_SIZE',
  'MAX_ARRAY_TEXTURE_LAYERS',
  'MAX_TEXTURE_LOD_BIAS',
  'MAX_UNIFORM_BUFFER_BINDINGS',
  'MAX_UNIFORM_BLOCK_SIZE',
  'UNIFORM_BUFFER_OFFSET_ALIGNMENT',
  'MAX_COMBINED_UNIFORM_BLOCKS',
  'MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS',
  'MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS',
];

const WEBGL2_AVAILABLE_METHODS = [
  'beginQuery',
  'beginTransformFeedback',
  'bindBufferBase',
  'bindBufferRange',
  'bindSampler',
  'bindTransformFeedback',
  'bindVertexArray',
  'blitFramebuffer',
  'clearBufferfi',
  'clearBufferfv',
  'clearBufferiv',
  'clearBufferuiv',
  'clientWaitSync',
  'compressedTexImage3D',
  'compressedTexSubImage3D',
  'copyBufferSubData',
  'copyTexSubImage3D',
  'createQuery',
  'createSampler',
  'createTransformFeedback',
  'createVertexArray',
  'deleteQuery',
  'deleteSampler',
  'deleteSync',
  'deleteTransformFeedback',
  'deleteVertexArray',
  'drawArraysInstanced',
  'drawBuffers',
  'drawElementsInstanced',
  'drawRangeElements',
  'endQuery',
  'endTransformFeedback',
  'fenceSync',
  'framebufferTextureLayer',
  'getActiveUniformBlockName',
  'getActiveUniformBlockParameter',
  'getActiveUniforms',
  'getBufferSubData',
  'getFragDataLocation',
  'getIndexedParameter',
  'getInternalformatParameter',
  'getQuery',
  'getQueryParameter',
  'getSamplerParameter',
  'getSyncParameter',
  'getTransformFeedbackVarying',
  'getUniformBlockIndex',
  'getUniformIndices',
  'invalidateFramebuffer',
  'invalidateSubFramebuffer',
  'isQuery',
  'isSampler',
  'isSync',
  'isTransformFeedback',
  'isVertexArray',
  'pauseTransformFeedback',
  'readBuffer',
  'renderbufferStorageMultisample',
  'resumeTransformFeedback',
  'samplerParameterf',
  'samplerParameteri',
  'texImage3D',
  'texStorage2D',
  'texStorage3D',
  'texSubImage3D',
  'transformFeedbackVaryings',
  'uniform1ui',
  'uniform1uiv',
  'uniform2ui',
  'uniform2uiv',
  'uniform3ui',
  'uniform3uiv',
  'uniform4ui',
  'uniform4uiv',
  'uniformBlockBinding',
  'uniformMatrix2x3fv',
  'uniformMatrix2x4fv',
  'uniformMatrix3x2fv',
  'uniformMatrix3x4fv',
  'uniformMatrix4x2fv',
  'uniformMatrix4x3fv',
  'vertexAttribDivisor',
  'vertexAttribI4i',
  'vertexAttribI4iv',
  'vertexAttribI4ui',
  'vertexAttribI4uiv',
  'vertexAttribIPointer',
  'waitSync',
];

const SEPARATORS = {
  KEY_VALUE_PRIMARY: ':',
  KEY_VALUE_SECONDARY: '=',
  LIST_PRIMARY: '&',
  LIST_SECONDARY: ',',
  LIST_TERTIARY: ';',
  SPACE: '_',
};

function isTypedArray(obj: object) {
  if (obj == null) {
    return false;
  }

  return (
    Object.getPrototypeOf(Object.getPrototypeOf(obj)).constructor.name ==
    'TypedArray'
  );
}

function checkRenderingContext(gl: RenderingContext | null) {
  const isWebGLContext =
    gl instanceof WebGL2RenderingContext || gl instanceof WebGLRenderingContext;

  if (!isWebGLContext) {
    return false;
  }

  for (const extension of WEBGL_CHECK_EXTENSIONS) {
    if (gl.getExtension(extension) != null) {
      return true;
    }
  }

  return false;
}

function getAvailableContexts() {
  return WEBGL_CONTEXTS.filter((context) => {
    try {
      const gl = document
        .createElement('canvas')
        .getContext(context, { stencil: true });

      return checkRenderingContext(gl);
    } catch (exc) {
      return false;
    }
  });
}

function getAvailableWebGL2Methods(gl: RenderingContext | null) {
  const isWebGL2Context = gl instanceof WebGL2RenderingContext;
  if (!isWebGL2Context) {
    return [];
  }

  return WEBGL2_AVAILABLE_METHODS.filter((method) => method in gl);
}

function getParameters(
  gl: RenderingContext | null
): [string, string | number | number[]][] {
  const isWebGLContext = gl instanceof WebGLRenderingContext;
  const isWebGL2Context = gl instanceof WebGL2RenderingContext;

  if (!isWebGLContext && !isWebGL2Context) {
    return [];
  }

  const glPrototype = Object.getPrototypeOf(gl);
  const parameterEnums = isWebGL2Context
    ? [...WEBGL_PARAMETERS, ...WEBGL2_PARAMETERS]
    : WEBGL_PARAMETERS;

  return parameterEnums.map((param) => {
    const value = gl.getParameter(glPrototype[param]);
    return [param, isTypedArray(value) ? Array.from(value) : value];
  });
}

function getSupportedExtensions(gl: RenderingContext | null) {
  const isWebGLContext = gl instanceof WebGLRenderingContext;
  const isWebGL2Context = gl instanceof WebGL2RenderingContext;

  if (!isWebGLContext && !isWebGL2Context) {
    return [];
  }

  return (gl.getSupportedExtensions() || []).sort();
}

function getUnmaskedParams(gl: RenderingContext | null) {
  const isWebGLContext = gl instanceof WebGLRenderingContext;
  const isWebGL2Context = gl instanceof WebGL2RenderingContext;

  if (!isWebGLContext && !isWebGL2Context) {
    return [];
  }

  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

  if (debugInfo == null) {
    return [];
  }

  return [
    ['vendor', gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)],
    ['renderer', gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)],
  ];
}

function normalizeParameter(
  param: string | number | number[]
): string | number {
  const spaceSubstituted =
    typeof param == 'string' ? param.replaceAll(' ', SEPARATORS.SPACE) : param;

  const normalizedParam =
    spaceSubstituted instanceof Array
      ? spaceSubstituted.join(SEPARATORS.LIST_TERTIARY)
      : spaceSubstituted;

  return normalizedParam;
}

export function getWebGLAttributes() {
  const availableContexts = getAvailableContexts();

  const glContext =
    document.createElement('canvas').getContext('webgl2') ||
    document.createElement('canvas').getContext('experimental-webgl2') ||
    document.createElement('canvas').getContext('webgl') ||
    document.createElement('canvas').getContext('experimental-webgl');

  const availableGl2Methods = getAvailableWebGL2Methods(glContext);
  const parameters = getParameters(glContext);
  const unmaskedParameters = getUnmaskedParams(glContext);
  const supportedExtensions = getSupportedExtensions(glContext);

  const stringifiedComponents = [
    [
      'available_contexts',
      availableContexts.join(SEPARATORS.LIST_SECONDARY),
    ].join(SEPARATORS.KEY_VALUE_PRIMARY),
    [
      'available_gl2_methods',
      availableGl2Methods.join(SEPARATORS.LIST_SECONDARY),
    ].join(SEPARATORS.KEY_VALUE_PRIMARY),
    [
      'parameters',
      parameters
        .map(([key, value]) =>
          [key, normalizeParameter(value)].join(SEPARATORS.KEY_VALUE_SECONDARY)
        )
        .join(SEPARATORS.LIST_SECONDARY),
    ].join(SEPARATORS.KEY_VALUE_PRIMARY),
    [
      'supported_extensions',
      supportedExtensions.join(SEPARATORS.LIST_SECONDARY),
    ].join(SEPARATORS.KEY_VALUE_PRIMARY),
    [
      'unmasked_parameters',
      unmaskedParameters
        .map(([key, value]) =>
          [key, normalizeParameter(value)].join(SEPARATORS.KEY_VALUE_SECONDARY)
        )
        .join(SEPARATORS.LIST_SECONDARY),
    ].join(SEPARATORS.KEY_VALUE_PRIMARY),
  ].join(SEPARATORS.LIST_PRIMARY);

  const fingerprint = window.sha256(stringifiedComponents);

  return {
    fingerprint,
    components: {
      stringified: stringifiedComponents,
      available_contexts: availableContexts,
      available_gl2_methods: availableGl2Methods,
      parameters: Object.fromEntries(parameters),
      supported_extensions: supportedExtensions,
      unmasked_parameters: Object.fromEntries(unmaskedParameters),
    },
  };
}
