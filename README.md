## asm-register

## Install
```sh
$ npm install asm-register
```

## Use
```ts
import { AsmRegister } from 'asm-register'; 

const r = new AsmRegister();
r.rax = 0xaaffeeddcc;
r.rax // 0xaaffeeddcc
r.eax // 0xffeeddcc
r.ax  // 0xddcc
r.ah  // 0xdd
r.al  // 0xcc
```

## dev
> $ npm start

## build
> $ npm run build