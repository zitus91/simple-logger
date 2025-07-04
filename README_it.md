# simple-logger

Un semplice e potente logger per Node.js che colora l’output in console, stampa un banner all’avvio e, se richiesto, scrive i log su file.

---

## Caratteristiche

- 🌈 **Colori in console** per ciascun livello di log
- 📝 **Scrittura su file** con creazione automatica di directory e file
- 🚀 **Banner di avvio** personalizzabile
- ⚙️ **Configurazione modulare** (livelli, directory, formati)
- 🔄 **Aggiornabile** facilmente con versioning semantico

---

## Installazione

```bash
npm install @_zitus_/simple-logger
```

---

## Utilizzo

1. **Import** del modulo:

   ```js
   const log = require('@_zitus_/simple-logger');
   ```

2. **Inizializza** il logger e mostra il banner all’avvio:

   ```js
   log.init('MyApp');
   // ***********************
   // *   MyApp avviata     *
   // * 2025-07-01 14:23:05 *
   // ***********************
   ```

3. **Loggare** messaggi in console (e opzionalmente su file):

   ```js
   log.info('Server in ascolto sulla porta 3000');
   log.warn('Memoria al 90%', true);        // log e salva in logs/application_warn.log
   log.error('Connessione al DB fallita', true);
   log.success('Database migrato correttamente');
   ```

---

## API

| Metodo                           | Descrizione                                        | Parametri                                     |
| -------------------------------- | -------------------------------------------------- | --------------------------------------------- |
| `log.init(appName)`              | Stampa un banner con nome app e timestamp corrente | `appName` (string, opzionale, default: `App`) |
| `log.info(msg, inFile=false)`    | Log di tipo **info** (ciano)                       | `msg` (string), `inFile` (boolean)            |
| `log.warn(msg, inFile=false)`    | Log di tipo **warn** (giallo)                      | `msg` (string), `inFile` (boolean)            |
| `log.error(msg, inFile=false)`   | Log di tipo **error** (rosso)                      | `msg` (string), `inFile` (boolean)            |
| `log.success(msg, inFile=false)` | Log di tipo **success** (verde)                    | `msg` (string), `inFile` (boolean)            |

---

## Esempio Completo

```js
// app.js
const log = require('@_zitus_/simple-logger');

// Inizializza e mostra il banner
log.init('MyCoolApp');

// Log standard in console
log.info('Applicazione avviata');

// Log con salvataggio su file
log.warn('CPU in sovraccarico', true);
log.error('Errore critico durante il backup', true);
log.success('Backup completato con successo', true);
```

All’avvio di `node app.js` otterrai:

```
***********************
*   MyCoolApp avviata   *
* 2025-07-01 14:23:05   *
***********************
2025-07-01 14:23:05 | 🚀 | [INFO] | Applicazione avviata
...
```

---

## Configurazione Avanzata

- **Modificare la directory di log**: modifica la costante `DEFAULT_LOG_DIR` in `index.js`
- **Aggiungere nuovi livelli**: espandi l’oggetto `ICONS` e crea un metodo corrispondente
- **Supporto async**: puoi sostituire `fs` con `fs.promises` per operazioni non bloccanti
- **Colori personalizzati**: integra [chalk](https://www.npmjs.com/package/chalk) per palette avanzate

---

## Contribuire

PR e issue benvenuti su [GitHub](https://github.com/zitus91/simple-logger)

---

## Licenza

MIT © Francesco Zito
