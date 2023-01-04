### AI_Tank-Server

NOTE:

- Môi trường cài đặt:

  Hệ điều hành Windows

  NodeJS v12.x

  MongoDB Server v4.x

- Chạy file aitank_gameserver\PsExce64.exe khi mới tải về

- Chạy lần lượt các lệnh terminal tại folder gốc:

```
npm install
npm run install:web
npm run install:game
npm run data:import
```

- Tài khoản admin được tạo:

  `admin`

  `adminhitclub@$#`

- Mở 2 terminal chạy 2 lệnh riêng:

```
npm run start:web
npm run start:game
```

- Server chạy: http://localhost

- Back up data:

```
npm run data:export
npm run backup
```

- Xóa các bản ghi trong database

```
npm run data:delete
```

- Xóa các tệp bot, kết quả chạy bot: exe, grl:

```
npm run data:clear
```
