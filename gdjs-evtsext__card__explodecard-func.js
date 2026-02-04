
if (typeof gdjs.evtsExt__Card__ExplodeCard !== "undefined") {
  gdjs.evtsExt__Card__ExplodeCard.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Card__ExplodeCard = {};
gdjs.evtsExt__Card__ExplodeCard.forEachIndex2 = 0;

gdjs.evtsExt__Card__ExplodeCard.forEachObjects2 = [];

gdjs.evtsExt__Card__ExplodeCard.forEachTemporary2 = null;

gdjs.evtsExt__Card__ExplodeCard.forEachTotalCount2 = 0;

gdjs.evtsExt__Card__ExplodeCard.GDCardObjects1= [];
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2= [];
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3= [];
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects4= [];
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects1= [];
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects2= [];
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects3= [];
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects4= [];


gdjs.evtsExt__Card__ExplodeCard.mapOfGDgdjs_9546evtsExt_9595_9595Card_9595_9595ExplodeCard_9546GDStarParticleObjects2Objects = Hashtable.newFrom({"StarParticle": gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects2});
gdjs.evtsExt__Card__ExplodeCard.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2, gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariableString(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariables().get("checkSom")) == "som1" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[k] = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\boom.mp3", false, 10, 1);
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2, gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariableString(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariables().get("checkSom")) == "som2" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[k] = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\dog.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2, gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariableString(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariables().get("checkSom")) == "som3" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[k] = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\respiracao.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2, gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariableString(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariables().get("checkSom")) == "som4" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[k] = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\toctoc.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2, gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariableString(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariables().get("checkSom")) == "som5" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[k] = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\splash.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2, gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariableString(gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i].getVariables().get("checkSom")) == "som6" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[k] = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\grito.mp3", false, 50, 1);
}}

}


};gdjs.evtsExt__Card__ExplodeCard.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Card"), gdjs.evtsExt__Card__ExplodeCard.GDCardObjects1);

for (gdjs.evtsExt__Card__ExplodeCard.forEachIndex2 = 0;gdjs.evtsExt__Card__ExplodeCard.forEachIndex2 < gdjs.evtsExt__Card__ExplodeCard.GDCardObjects1.length;++gdjs.evtsExt__Card__ExplodeCard.forEachIndex2) {
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects2.length = 0;

gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2.length = 0;


gdjs.evtsExt__Card__ExplodeCard.forEachTemporary2 = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects1[gdjs.evtsExt__Card__ExplodeCard.forEachIndex2];
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2.push(gdjs.evtsExt__Card__ExplodeCard.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Card__ExplodeCard.mapOfGDgdjs_9546evtsExt_9595_9595Card_9595_9595ExplodeCard_9546GDStarParticleObjects2Objects, (( gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2[0].getPointX("")), (( gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects2[i].setZOrder(100);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sounds/cuckoo.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectWidthTween2("VanishWidth", 0, "easeOutExpo", 1, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectHeightTween2("VanishHeight", 0, "easeOutExpo", 1, true);
}
}
{ //Subevents: 
gdjs.evtsExt__Card__ExplodeCard.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Card__ExplodeCard.func = function(runtimeScene, Card, Tween, StarParticle, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Card": Card
, "StarParticle": StarParticle
},
  _objectArraysMap: {
"Card": gdjs.objectsListsToArray(Card)
, "StarParticle": gdjs.objectsListsToArray(StarParticle)
},
  _behaviorNamesMap: {
"Tween": Tween
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Card"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Card"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Card__ExplodeCard.GDCardObjects1.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects4.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects1.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects2.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects3.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects4.length = 0;

gdjs.evtsExt__Card__ExplodeCard.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects1.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects2.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects3.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDCardObjects4.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects1.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects2.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects3.length = 0;
gdjs.evtsExt__Card__ExplodeCard.GDStarParticleObjects4.length = 0;


return;
}

gdjs.evtsExt__Card__ExplodeCard.registeredGdjsCallbacks = [];