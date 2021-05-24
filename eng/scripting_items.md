## Элемент (Item)

`app.project.item(index)`

`app.project.item(string itemname)`

`app.project.itemByID(int id)`

`app.project.items[index]`

### Атрибуты

Объект | Описание
- | -
name | The name of the item.
id | A unique and persistent identification number used internally to identify an item between sessions.
typeName | A user-readable name for the item type; for example, “Folder”, “Footage”, or “Composition”. 
comment | A string that holds a comment. The comment is for the user’s purpose only; it has no effect on the item’s appearance or behavior.

## AVItem

The AVItem object provides access to attributes and methods of audio/visual files imported into Template.

### Атрибуты

Объект | Описание
- | -
width | The width of the item, in pixels.
height | The height of the item in pixels.
duration | Returns the duration, in seconds, of the item. Still footage items have a duration of 0.
frameDuration | Returns the length of a frame for this AVItem, in seconds.
pixelAspect | The pixel aspect ratio (PAR) of the item.

## CompItem

The CompItem object represents a composition, and allows you to manipulate and get information about it. Access the objects by position index number in a project’s item collection.

### Атрибуты

Объект | Описание
- | -
displayStartTime | The time set as the beginning of the composition, in seconds.
numLayers | The number of layers in the composition.
activeCamera | The active camera, which is the front-most camera layer that is enabled. The value is null if the composition contains no enabled camera layers.
bgColor | The background color of the composition. The three array values specify the red, green, and blue components of the color.

### Методы

Функция | Описание
- | -
layer(string layername) | Returns a Layer object, specified by name.
layer(int layerindex) | Returns a Layer object, specified by an index.
layer(Layer otherLayer, int relIndex) | Returns a Layer object, specified by an index position relative to another layer.

