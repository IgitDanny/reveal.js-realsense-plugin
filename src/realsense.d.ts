// Type definitions for realsense.js 3.0
// Project: https://software.intel.com/realsense SDK
// Definitions by: Martin W. Kirst <https://github.com/nitram509>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var pxcmConst : realsense.pxcmConst;

declare var RealSenseInfo:RealSenseInfo;
declare var PXCMSenseManager_CreateInstance:PXCMSenseManager_CreateInstance;

interface RealSenseInfo {
  (features:Array<string>, callback:(info:RealSenseInfoEvent) => void) : void;
}

interface RealSenseInfoEvent {
  IsReady : boolean;
}

interface PXCMSenseManager_CreateInstance {
  ():PXCMSenseManager_CreateInstance;
  then(callback:(result:PXCSenseManager) => void) : PXCMSenseManager_CreateInstance;
  then(callback:(result:PXCMHandModule) => void) : PXCMSenseManager_CreateInstance;
  then(callback:(result:PXCMHandConfiguration) => void) : PXCMSenseManager_CreateInstance;
  then(callback:(result:PXCMCaptureManager) => void) : PXCMSenseManager_CreateInstance;
  then(callback:(result:PXCMImageSize) => void) : PXCMSenseManager_CreateInstance;
  catch(callback:(error:any) => void) : PXCMSenseManager_CreateInstance;
}

interface PXCSenseManager {
  EnableHand(onHandData:any):any;
  Init(onConnect:any, onStatus:any):any;
  StreamFrames():any;
  QueryCaptureManager():any;
}

interface PXCMHandModule {
  CreateActiveConfiguration():PXCMHandConfiguration;
}

interface PXCMHandConfiguration {
  ApplyChanges():void;
  EnableAllGestures(enabled:boolean):void;
  DisableAllGestures():void;
  DisableAlert:any;
  DisableAllAlerts():void;
  Disable:any;
  EnableAlert(enabled:boolean):void;
  EnableAllAlerts():void;
  Enable:any;
  IsAlertEnabled:any;
  SubscribeAlert:any;
  UnsubscribeAlert:any;

  /** Set the user name to save hand calibration. */ SetUserName : any;
  /** Get the user name. */ GetUserName : any;
  /** Enable joint speed calculation. */ EnableJointSpeed : any;
  /** Disable joint speed calculation. */ DisableJointSpeed : any;
  /** Set the tracking bounds. */ SetTrackingBounds : any;
  /** Get the tracking bounds. */ GetTrackingBounds : any;
  /** Set the tracking mode. */ SetTrackingMode : any;
  /** Get the tracking mode. */ GetTrackingMode : any;
  /** Set the motion smoothing value. */ SetSmoothingValue : any;
  /** Get the motion smoothing value. */ GetSmoothingValue : any;
  /** Enable/disable the calculation of normalized joints */ EnableNormalizedJoin : any;
  /** Check if the normalized joints are calculated. */ IsNormalizedJointsEnabled : boolean;
  /** Enable/disable the calculation of the hand segmentation image */ EnableSegmentationImage:any;
}

interface PXCMCaptureManager {
  QueryImageSize(stream:realsense.StreamType)
}

interface PXCMImageSize {
  sts:PXCMStatus;
  size:PXCMSizeI32
}

interface PXCMSizeI32 {
  width:number;
  height:number;
}

declare enum PXCMStatus {

}

declare module realsense {

  interface pxcmConst {
    PXCMCapture:PXCMCapture;
  }

  interface PXCMCapture {
    /**
     @enum StreamType
     Bit-OR'ed values of stream types, physical or virtual streams.
     */
    STREAM_TYPE_ANY: StreamType;          /* Unknown/undefined type */
    STREAM_TYPE_COLOR: StreamType;     /* the color stream type  */
    STREAM_TYPE_DEPTH: StreamType;     /* the depth stream type  */
    STREAM_TYPE_IR: StreamType;     /* the infrared stream type */
    STREAM_TYPE_LEFT: StreamType;     /* the stereoscopic left intensity image */
    STREAM_TYPE_RIGHT: StreamType;     /* the stereoscopic right intensity image */
  }

  enum StreamType {
    STREAM_TYPE_ANY,
    STREAM_TYPE_COLOR,
    STREAM_TYPE_DEPTH,
    STREAM_TYPE_IR,
    STREAM_TYPE_LEFT,
    STREAM_TYPE_RIGHT
  }

}
