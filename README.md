## discord-battle
# `discord-battle` là một module được làm bởi người việt nam! Tất cả ngôn ngữ đều là Tiếng Việt! 🌟\
# Hỗ trợ discord V13 🤖
# Dành cho người Việt ⭐
## Thông tin cơ bản
1. ⏩ [Tải](https://www.npmjs.com/package/discord-battle#tải-xuống)
2. ⏩ [Tất cả game](https://www.npmjs.com/package/discord-battle#nhưng-trò-chơi)
3. ⏩ [Sử dụng](https://www.npmjs.com/package/discord-battle#sao-để-dùng-?)
4. ⏩ [Hướng dẫn](https://www.npmjs.com/package/discord-battle#hướng-dẫn)
## Tải xuống
```sh
$ npm install discord-battle
```
## Nhưng trò chơi
Ya, đúng như cái tên ở đây có những trò chơi như:
`battle`
## Sao để dùng ?
Rất đơn giản! Bạn làm theo các bước sau: 
1. Tạo một con Bot
2. Tải module này từ trên thư viên [tải xuống](https://www.npmjs.com/package/discord-battle#tải-xuống)
3. Đọc hướng dẫn tại [hướng dẫn](https://www.npmjs.com/package/discord-battle#hướng-dẫn)
### Bắt đầu game
# Đối với phiên bản discord.js V13
```js

const Discord = require('discord.js') //Gọi module discord.js và discord-battle
const battle = require('discord-battle')
/* Tạo client Discord */
const client = new Discord.Client()

/* Event ready của discord */
client.on('ready', () => {
    console.log(`${client.tag} đã sẵng sàng`)
})

let prefix = "!" /* Bạn có thể đổi prefix ở đây */

/* MESSAGE EVENT */
client.on('messageCreate', message => {
    let member = message.mentions.members.first()
        /* BATTLES */
        if (message.content.startsWith() === `${prefix}battle` && member) {
            battle.readyBattle(member, message)
        }
})
client.login('TOKEN CỦA BẠN') /* Thay thế TOKEN CỦA BẠN bằng token của bot được lấy ở https://discord.com/developers/applications */
```

Sau khi đã cài đặt tất cả các bước trên. Hãy chạy lệnh bằng <prefix><tên game> <đối thủ>
## Hướng dẫn
#### Bắt đầu
# Đợi đợt cập nhập sau!

## Ví dụ
 ![image](https://user-images.githubusercontent.com/88836000/136926810-a0a333c8-1004-4123-9482-3ebc640fe6f4.png)

## Hỗ trợ
# Vì đây là một module **Rất mới** với một mình mình phát triển nên nếu có lỗi bug hoặc không biết cách dùng hãy kết bạn với **JustDio#9277** 
## Ghi chú
1. Đây là module được nâng cấp từ module [discord-minigame](https://www.npmjs.com/package/discord-minigames) nên nếu bạn thấy hay đừng quên ủng hộ luôn module đó nhé!
2. This is an upgraded module from the [discord-minigame](https://www.npmjs.com/package/discord-minigames) module, so if you find it interesting, don't forget to support that module too!