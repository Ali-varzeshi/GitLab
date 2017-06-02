const Telegraf = require('telegraf')
const RateLimit = require('telegraf-ratelimit')
 
const telegraf = new Telegraf('379202484:AAEsmcckClA46rxcwJPnmpHbLi0UK5C_jDc');
 
// Set limit to 1 message per 3 seconds 
const limiter = new RateLimit({

  window: 3000,
  limit: 1,
  onLimitExceeded: (ctx, next) => ctx.reply('Rate limit exceeded')
})
 
telegraf.use(limiter.middleware())
telegraf.on('text', (ctx) => ctx.reply('Hey'))
telegraf.startPolling();




// const Telegraf = require('telegraf')
// const RateLimit = Telegraf;

// const telegraf = new Telegraf('379202484:AAFLW3AB4eDR6OypDV_-O5GQ0J81YREe2yc')

// // Set limit to 1 message per 3 seconds per chat per user
// const limiter = new RateLimit({
//   window: 6000,
//   limit: 1,
//   onLimitExceeded: (ctx, next) => ctx.reply('Rate limit exceeded')
// })
// telegraf.use(limiter.middleware())

// // Set limit to 1 sticker per 1 minute per chat
// const stickerLimiter = new RateLimit({
//   window: 60 * 1000,
//   limit: 1,
//   keyGenerator: function (ctx) {
//     return ctx.chat.id
//   },
//   onLimitExceeded: (ctx, next) => ctx.reply('Sticker rate limit exceeded')
// })

// telegraf.on('text', (ctx) => ctx.reply('Hey'))
// telegraf.on('sticker', stickerLimiter.middleware(), (ctx) => ctx.reply('Nice sticker'))

// telegraf.startPolling()