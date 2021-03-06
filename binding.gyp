{
  'targets': [
    {
      'target_name': 'pict_js-native',
      'sources': [ '<!@(dir .\\src\\*.cpp)', '<!@(dir .\\ms_pict\\api\\*.cpp)'], #windows
      # 'sources': [ '<!@(ls -1 ./src/*.cpp)', '<!@(ls -1 ./ms_pict/api/*.cpp)'], #linux
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")", ],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      'cflags_cc': [ '-fPIC', '-std=c++11', '-fno-exceptions', '-w', '-fpermissive' ],
      'cflags_cc!': ['-fno-exceptions'],
      'cflags!': [ '-fno-exceptions' ],
      'xcode_settings': {
        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
        'CLANG_CXX_LIBRARY': 'libc++',
        'MACOSX_DEPLOYMENT_TARGET': '10.7'
      },
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1 },
      }
    }
  ]
}
