## Слой (Layer)

`app.project.item(index).layer(index)`

The Layer object provides access to layers within compositions. It can be accessed from an item’s layer collection either by index number or by a name string.

### Атрибуты

Объект | Описание
- | -
containingComp | The composition that contains this layer.
index | The index position of the layer.
inPoint | The “in” point of the layer, expressed in composition time (seconds).
outPoint | The “out” point of the layer, expressed in composition time (seconds).
isNameSet | True if the value of the name attribute has been set explicitly, rather than automatically from the source.
locked | When true, the layer is locked; otherwise false. This corresponds to the lock toggle in the Layer panel.
nullLayer | When true, the layer was created as a null object; otherwise false.
parent | The parent of this layer; can be null.
startTime | The start time of the layer, expressed in composition time (seconds).
stretch | The layer’s time stretch, expressed as a percentage. A value of 100 means no stretch. Values between 0 and 1 are set to 1, and values between -1 and 0 (not including 0) are set to -1.
name | The name of the layer.
transform | The layer's Transform property group.
anchorPoint | The layer's Anchor Point property.
position | The layer's Position property.
scale | The layer's Scale property.
orientation | The layer's Orientation property.
opacity | The layer's Opacity property.
rotation | The layer's Rotation property.

## Методы

Функция | Описание
- | -
effect(string effectname) | Retreives the layer's effect by its name.
property(string propertyname) | Retreives the layer's property by its name.
sourceRectAtTime(bool extents) | Retrieves the rectangle bounds of the layer, corrected for text or shape layer content.

