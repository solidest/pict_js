#include <napi.h>

#include "jstask.h"
#include "jsmodel.h"
#include "jsparameter.h"

using namespace Napi;

    // _PictCreateTask
    // _PictAddExclusion
    // _PictAddSeed
    // PictGenerate
    // _PictAttachChildModel
    // PictResetResultFetching
    // PictGetNextResultRow
    // _PictSetRootModel
    // _PictGetTotalParameterCount
    // _PictDeleteTask
    // _PictCreateModel
    // _PictAddParameter
    // _PictDeleteModel

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    Task::Init(env, exports);
    Model::Init(env, exports);
    Parameter::Init(env, exports);
    return exports;
}

NODE_API_MODULE(addon, Init)