## Свойство (Property)

`app.project.item(index).layer(index).property(propertyname)`

The Property object contains value, keyframe, and expression information about a particular AE property of a layer. An AE property is a value, often animatable, of an effect, mask, or transform within an individual layer.

### Атрибуты

Объект | Описание
- | -
value | The value of the named property at the current time.

### Методы

Функция | Описание
- | -
setValue(newValue) | Sets the static value of a property that has no keyframes.

### Примеры

- Get and set the value of opacity

    ```javascript
    var myProperty = myLayer.opacity;
    // opacity has propertyValueType of OneD, and is stored as a float
    myProperty.setValue(50); //set opacity to 50%
    // Variable my Opacity is a float value
    var myOpacity = myProperty.value;
    ```

- Get and set the value of a position

    ```javascript
    var myProperty = myLayer.position;
    // position has propertyValueType of ThreeD_SPATIAL, and is stored as an array of 3 floats
    myProperty.setValue([10.0, 30.0, 0.0]);
    // Variable my Position is an array of 3 floats
    var myPosition = myProperty.value;
    ```

## PropertyBase

PropertyBase is the base class for both Property and PropertyGroup.

### Атрибуты

Объект | Описание
- | -
active | When true, the layer’s video is active at the current time. 
name | The name of the property.
matchName | A special name for the property used to build unique naming paths.
isEffect | When true, this property is an effect PropertyGroup.
isMask | When true, this property is a mask PropertyGroup.
enabled | When true, the property is enabled; otherwise false.

### Примеры

```javascript
var layer1 = app.project.item(1).layer(1);
var layer1position = layer1.transform.position;
alert(layer1position.value);
```

```javascript
var effect2 = app.project.item(1).layer(1).effect("Curves");
var effect2param = effect2.property("BlendWithOriginal");
alert(effect2.name);
```

## PropertyGroup

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects.

### Атрибуты

Объект | Описание
- | -
numProperties | The number of indexed properties in this group.

### Методы

Функция | Описание
- | -
property(propertyname) | Finds and returns a child property of this group, as specified by either its name.