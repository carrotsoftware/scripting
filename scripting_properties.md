## Свойство (Property)

`app.project.item(index).layer(index).property(propertyname)`

Объект Property содержит информацию о значении, ключевом кадре и выражении об определенном свойстве AE слоя. Свойство AE - это значение, часто анимируемое, эффекта, маски или трансформации в пределах отдельного слоя.

### Атрибуты

Объект | Описание
- | -
value | Значение свойства в текущее время.

### Методы

Функция | Описание
- | -
setValue(newValue) | Устанавливает статическое значение свойства, не имеющего ключевых кадров.

### Примеры

- Получить и установить значение непрозрачности

    ```javascript
    var myProperty = myLayer.opacity;
    // opacity has propertyValueType of OneD, and is stored as a float
    myProperty.setValue(50); //set opacity to 50%
    // Variable my Opacity is a float value
    var myOpacity = myProperty.value;
    ```

- Получить и установить значение позиции

    ```javascript
    var myProperty = myLayer.position;
    // position has propertyValueType of ThreeD_SPATIAL, and is stored as an array of 3 floats
    myProperty.setValue([10.0, 30.0, 0.0]);
    // Variable my Position is an array of 3 floats
    var myPosition = myProperty.value;
    ```

## PropertyBase

PropertyBase - это базовый класс как для Property, так и для PropertyGroup.

### Атрибуты

Объект | Описание
- | -
active | Если задано значение `true`, видео слоя активно в текущий момент.
name | Название свойства.
matchName | Специальное имя для свойства, используемого для создания уникальных путей именования.
isEffect | Если установлено значение `true`, это свойство является PropertyGroup эффекта.
isMask | Если установлено значение `true`, это свойство является PropertyGroup маски.
enabled | Если установлено значение `true`, свойство включено; в противном случае - `false`.

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

Объект PropertyGroup представляет группу свойств. Он может содержать объекты Property и другие объекты PropertyGroup.

### Атрибуты

Объект | Описание
- | -
numProperties | Количество проиндексированных свойств в этой группе.

### Методы

Функция | Описание
- | -
property(propertyname) | Находит и возвращает дочернее свойство этой группы в соответствии с его именем.