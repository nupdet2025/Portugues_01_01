gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDIntroObjects1= [];
gdjs.IntroCode.GDIntroObjects2= [];
gdjs.IntroCode.GDavan_95231arObjects1= [];
gdjs.IntroCode.GDavan_95231arObjects2= [];
gdjs.IntroCode.GDbg_9595introObjects1= [];
gdjs.IntroCode.GDbg_9595introObjects2= [];
gdjs.IntroCode.GDcursorObjects1= [];
gdjs.IntroCode.GDcursorObjects2= [];
gdjs.IntroCode.GDbtn_9595replayObjects1= [];
gdjs.IntroCode.GDbtn_9595replayObjects2= [];


gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDavan_959595231arObjects1Objects = Hashtable.newFrom({"avançar": gdjs.IntroCode.GDavan_95231arObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.IntroCode.GDcursorObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.IntroCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDcursorObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("avançar"), gdjs.IntroCode.GDavan_95231arObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_9546IntroCode_9546GDavan_959595231arObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sounds/cockatrice_playcard.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_01.mp3", 2, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_replay"), gdjs.IntroCode.GDbtn_9595replayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDbtn_9595replayObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDbtn_9595replayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDbtn_9595replayObjects1[k] = gdjs.IntroCode.GDbtn_9595replayObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDbtn_9595replayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_01.mp3", 2, false, 100, 1);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDIntroObjects1.length = 0;
gdjs.IntroCode.GDIntroObjects2.length = 0;
gdjs.IntroCode.GDavan_95231arObjects1.length = 0;
gdjs.IntroCode.GDavan_95231arObjects2.length = 0;
gdjs.IntroCode.GDbg_9595introObjects1.length = 0;
gdjs.IntroCode.GDbg_9595introObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;
gdjs.IntroCode.GDbtn_9595replayObjects1.length = 0;
gdjs.IntroCode.GDbtn_9595replayObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
gdjs.IntroCode.GDIntroObjects1.length = 0;
gdjs.IntroCode.GDIntroObjects2.length = 0;
gdjs.IntroCode.GDavan_95231arObjects1.length = 0;
gdjs.IntroCode.GDavan_95231arObjects2.length = 0;
gdjs.IntroCode.GDbg_9595introObjects1.length = 0;
gdjs.IntroCode.GDbg_9595introObjects2.length = 0;
gdjs.IntroCode.GDcursorObjects1.length = 0;
gdjs.IntroCode.GDcursorObjects2.length = 0;
gdjs.IntroCode.GDbtn_9595replayObjects1.length = 0;
gdjs.IntroCode.GDbtn_9595replayObjects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
