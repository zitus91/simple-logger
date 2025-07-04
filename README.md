# simple-logger

A simple and powerful logger for Node.js that adds colored console output, displays a startup banner, and, when requested, writes logs to files.

---

## Features

- 🌈 **Colorful console output** for each log level
- 📝 **File logging** with automatic directory and file creation
- 🚀 **Customizable startup banner**
- ⚙️ **Modular configuration** (levels, directory, formats)
- 🔄 **Semantic versioning** for easy updates

---

## Installation

```bash
npm install @_zitus_/simple-logger
```

---

## Usage

1. **Import** the module:

   ```js
   const log = require('@_zitus_/simple-logger');
   ```

2. **Initialize** the logger and display the startup banner:

   ```js
   log.init('MyApp');
   // ***********************
   // *   MyApp started     *
   // * 2025-07-01 14:23:05 *
   // ***********************
   ```

3. **Log** messages to console (and optionally to file):

   ```js
   log.info('Server listening on port 3000');
   log.warn('Memory usage above 80%', true);   // logs to console and logs/application_warn.log
   log.error('Database connection failed', true);
   log.success('Data migrated successfully');
   ```

---

## API

| Method                             | Description                                         | Parameters                                    |
|------------------------------------|-----------------------------------------------------|-----------------------------------------------|
| `log.init(appName)`                | Displays a banner with the app name and timestamp   | `appName` (string, optional, default: `App`)  |
| `log.info(msg, inFile=false)`      | Logs an **info** message (cyan)                     | `msg` (string), `inFile` (boolean)            |
| `log.warn(msg, inFile=false)`      | Logs a **warn** message (yellow)                    | `msg` (string), `inFile` (boolean)            |
| `log.error(msg, inFile=false)`     | Logs an **error** message (red)                     | `msg` (string), `inFile` (boolean)            |
| `log.success(msg, inFile=false)`   | Logs a **success** message (green)                  | `msg` (string), `inFile` (boolean)            |

---

## Full Example

```js
// app.js
const log = require('@_zitus_/simple-logger');

// Initialize and display startup banner
log.init('MyCoolApp');

// Standard console logs
log.info('Application started');

// Console and file logging
log.warn('CPU usage is high', true);
log.error('Critical error during backup', true);
log.success('Backup completed successfully', true);
```

Running `node app.js` yields:

```
***********************
*   MyCoolApp started  *
* 2025-07-01 14:23:05  *
***********************
2025-07-01 14:23:05 | 🚀 | [INFO] | Application started
...
```

---

## Advanced Configuration

- **Change log directory**: update the `DEFAULT_LOG_DIR` constant in `index.js`
- **Add new levels**: extend the `ICONS` object and create corresponding methods
- **Async support**: replace `fs` with `fs.promises` for non-blocking operations
- **Custom colors**: integrate [chalk](https://www.npmjs.com/package/chalk) for advanced color palettes

---

## Contributing

Pull requests and issues are welcome on [GitHub](https://github.com/zitus91/simple-logger).

---

## License

MIT © Francesco Zito
