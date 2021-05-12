## Скрипты

> JavaScript - это платформонезависимый язык сценариев, который можно использовать для управления многими функциями и автоматизации многих задач в шаблонах Carrot.

## Разработка и отладка

Для помощи в разработке, отладке и тестировании скриптов предоставляется интерактивная среда разработки и тестирования.

Редактор сценариев Carrot (в Template Preview, Edit > Scripts):

![Script Editor user interface](_images/scripteditor.png)

## Visual Studio Code

Для отладки скриптов лучше использовать VS Code: [code.visualstudio.com](https://code.visualstudio.com/)

### Открытие каталога проекта
- File > Open Folder
- Выберите каталог вашего проекта

### Создание задачи запуска отладки
Необходимо создать задачу отладки для VS Code, которая будет запускаться, когда вы хотите отлаживать скрипты.

В каталоге вашего проекта:
- создайте папку с именем .vscode (с точкой)
- в этой папке создайте файл launch.json
- вставьте следующий код:
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Attach to Carrot",
            "type": "node",
            "request": "attach",
            "protocol": "auto",
            "address": "localhost",
	        "port": 24222
        }
    ]
}
```

### Запуск отладчика
После того, как вы настроите свою среду выполнения:
- В Carrot Template Preview, Edit > Scripts. Откроется редактор сценариев Carrot.
- Выберите файл из каталога проекта VS Code, Source > External File.
![Script Editor External File](_images/externalfile.png)
- В VS Code, Run > Start Debugging > Attach to Carrot.
- В редакторе скриптов Carrot, выполните скрипт нажав на кнопку Run <kbd>F5</kbd>.
- Если скрипт выдаст какие-либо ошибки, вы сможете просматривать переменные и cтек вызовов (call stack).
![Script Editor & VS Code](_images/vscodedebug.png)