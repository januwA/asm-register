const X64_SIZE = 8;
const YMM_SIZE = 256 / 8;

function alloc(size: number) {
  return new DataView(new ArrayBuffer(size));
}

export class AsmRegister {
  constructor(public readonly littleEndian: boolean = false) {}

  private _rax: DataView = alloc(X64_SIZE);
  private _rbx: DataView = alloc(X64_SIZE);
  private _rcx: DataView = alloc(X64_SIZE);
  private _rdx: DataView = alloc(X64_SIZE);
  private _rsi: DataView = alloc(X64_SIZE);
  private _rdi: DataView = alloc(X64_SIZE);
  private _rbp: DataView = alloc(X64_SIZE);
  private _rsp: DataView = alloc(X64_SIZE);
  private _rip: DataView = alloc(X64_SIZE);
  private _r8: DataView = alloc(X64_SIZE);
  private _r9: DataView = alloc(X64_SIZE);
  private _r10: DataView = alloc(X64_SIZE);
  private _r11: DataView = alloc(X64_SIZE);
  private _r12: DataView = alloc(X64_SIZE);
  private _r13: DataView = alloc(X64_SIZE);
  private _r14: DataView = alloc(X64_SIZE);
  private _r15: DataView = alloc(X64_SIZE);
  private _ymm0: DataView = alloc(YMM_SIZE);
  private _ymm1: DataView = alloc(YMM_SIZE);
  private _ymm2: DataView = alloc(YMM_SIZE);
  private _ymm3: DataView = alloc(YMM_SIZE);
  private _ymm4: DataView = alloc(YMM_SIZE);
  private _ymm5: DataView = alloc(YMM_SIZE);
  private _ymm6: DataView = alloc(YMM_SIZE);
  private _ymm7: DataView = alloc(YMM_SIZE);
  private _ymm8: DataView = alloc(YMM_SIZE);
  private _ymm9: DataView = alloc(YMM_SIZE);
  private _ymm10: DataView = alloc(YMM_SIZE);
  private _ymm11: DataView = alloc(YMM_SIZE);
  private _ymm12: DataView = alloc(YMM_SIZE);
  private _ymm13: DataView = alloc(YMM_SIZE);
  private _ymm14: DataView = alloc(YMM_SIZE);
  private _ymm15: DataView = alloc(YMM_SIZE);
  private _rflag: DataView = alloc(X64_SIZE);

  private getFloat64(r: DataView) {
    return r.getFloat64(0, this.littleEndian);
  }
  private setFloat64(r: DataView, value: number) {
    return r.setFloat64(0, value, this.littleEndian);
  }
  private getFloat32(r: DataView) {
    return r.getFloat64(16, this.littleEndian);
  }
  private setFloat32(r: DataView, value: number) {
    return r.setFloat64(16, value, this.littleEndian);
  }

  private get64(r: DataView) {
    return Number(r.getBigUint64(0, this.littleEndian));
  }
  private set64(r: DataView, value: number) {
    r.setBigUint64(0, BigInt(value), this.littleEndian);
  }
  private get32(r: DataView) {
    return r.getUint32(4, this.littleEndian);
  }
  private set32(r: DataView, value: number) {
    r.setUint32(4, value, this.littleEndian);
  }
  private get16(r: DataView) {
    return r.getUint16(6, this.littleEndian);
  }
  private set16(r: DataView, value: number) {
    r.setUint16(6, value, this.littleEndian);
  }
  private get8h(r: DataView) {
    return (r.getUint16(6, this.littleEndian) >> 8) & 0xff;
  }
  private set8h(r: DataView, value: number) {
    r.setUint16(6, (value << 8) | this.get8l(r), this.littleEndian);
  }
  private get8l(r: DataView) {
    return r.getUint8(7);
  }
  private set8l(r: DataView, value: number) {
    r.setUint8(7, value);
  }
  get rax() {
    return this.get64(this._rax);
  }
  set rax(value) {
    this.set64(this._rax, value);
  }
  get eax() {
    return this.get32(this._rax);
  }
  set eax(value) {
    this.set32(this._rax, value);
  }
  get ax() {
    return this.get16(this._rax);
  }
  set ax(value) {
    this.set16(this._rax, value);
  }
  get ah() {
    return this.get8h(this._rax);
  }
  set ah(value) {
    this.set8h(this._rax, value);
  }
  get al() {
    return this.get8l(this._rax);
  }
  set al(value) {
    this.set8l(this._rax, value);
  }

  get rcx() {
    return this.get64(this._rcx);
  }
  set rcx(value) {
    this.set64(this._rcx, value);
  }
  get ecx() {
    return this.get32(this._rcx);
  }
  set ecx(value) {
    this.set32(this._rcx, value);
  }
  get cx() {
    return this.get16(this._rcx);
  }
  set cx(value) {
    this.set16(this._rcx, value);
  }
  get ch() {
    return this.get8h(this._rcx);
  }
  set ch(value) {
    this.set8h(this._rcx, value);
  }
  get cl() {
    return this.get8l(this._rcx);
  }
  set cl(value) {
    this.set8l(this._rcx, value);
  }

  get rdx() {
    return this.get64(this._rdx);
  }
  set rdx(value) {
    this.set64(this._rdx, value);
  }
  get edx() {
    return this.get32(this._rdx);
  }
  set edx(value) {
    this.set32(this._rdx, value);
  }
  get dx() {
    return this.get16(this._rdx);
  }
  set dx(value) {
    this.set16(this._rdx, value);
  }
  get dh() {
    return this.get8h(this._rdx);
  }
  set dh(value) {
    this.set8h(this._rdx, value);
  }
  get dl() {
    return this.get8l(this._rdx);
  }
  set dl(value) {
    this.set8l(this._rdx, value);
  }

  get rbx() {
    return this.get64(this._rbx);
  }
  set rbx(value) {
    this.set64(this._rbx, value);
  }
  get ebx() {
    return this.get32(this._rbx);
  }
  set ebx(value) {
    this.set32(this._rbx, value);
  }
  get bx() {
    return this.get16(this._rbx);
  }
  set bx(value) {
    this.set16(this._rbx, value);
  }
  get bh() {
    return this.get8h(this._rbx);
  }
  set bh(value) {
    this.set8h(this._rbx, value);
  }
  get bl() {
    return this.get8l(this._rbx);
  }
  set bl(value) {
    this.set8l(this._rbx, value);
  }

  get rsp() {
    return this.get64(this._rsp);
  }
  set rsp(value) {
    this.set64(this._rsp, value);
  }
  get esp() {
    return this.get32(this._rsp);
  }
  set esp(value) {
    this.set32(this._rsp, value);
  }
  get sp() {
    return this.get16(this._rsp);
  }
  set sp(value) {
    this.set16(this._rsp, value);
  }
  get sph() {
    return this.get8h(this._rsp);
  }
  set sph(value) {
    this.set8h(this._rsp, value);
  }
  get spl() {
    return this.get8l(this._rsp);
  }
  set spl(value) {
    this.set8l(this._rsp, value);
  }

  get rbp() {
    return this.get64(this._rbp);
  }
  set rbp(value) {
    this.set64(this._rbp, value);
  }
  get ebp() {
    return this.get32(this._rbp);
  }
  set ebp(value) {
    this.set32(this._rbp, value);
  }
  get bp() {
    return this.get16(this._rbp);
  }
  set bp(value) {
    this.set16(this._rbp, value);
  }
  get bph() {
    return this.get8h(this._rbp);
  }
  set bph(value) {
    this.set8h(this._rbp, value);
  }
  get bpl() {
    return this.get8l(this._rbp);
  }
  set bpl(value) {
    this.set8l(this._rbp, value);
  }

  get rsi() {
    return this.get64(this._rsi);
  }
  set rsi(value) {
    this.set64(this._rsi, value);
  }
  get esi() {
    return this.get32(this._rsi);
  }
  set esi(value) {
    this.set32(this._rsi, value);
  }
  get si() {
    return this.get16(this._rsi);
  }
  set si(value) {
    this.set16(this._rsi, value);
  }
  get sih() {
    return this.get8h(this._rsi);
  }
  set sih(value) {
    this.set8h(this._rsi, value);
  }
  get sil() {
    return this.get8l(this._rsi);
  }
  set sil(value) {
    this.set8l(this._rsi, value);
  }

  get rdi() {
    return this.get64(this._rdi);
  }
  set rdi(value) {
    this.set64(this._rdi, value);
  }
  get edi() {
    return this.get32(this._rdi);
  }
  set edi(value) {
    this.set32(this._rdi, value);
  }
  get di() {
    return this.get16(this._rdi);
  }
  set di(value) {
    this.set16(this._rdi, value);
  }
  get dih() {
    return this.get8h(this._rdi);
  }
  set dih(value) {
    this.set8h(this._rdi, value);
  }
  get dil() {
    return this.get8l(this._rdi);
  }
  set dil(value) {
    this.set8l(this._rdi, value);
  }

  get rip() {
    return this.get64(this._rip);
  }
  set rip(value) {
    this.set64(this._rip, value);
  }
  get eip() {
    return this.get32(this._rip);
  }
  set eip(value) {
    this.set32(this._rip, value);
  }
  get ip() {
    return this.get16(this._rip);
  }
  set ip(value) {
    this.set16(this._rip, value);
  }

  get r0() {
    return this.rax;
  }
  set r0(value) {
    this.rax = value;
  }
  get r0d() {
    return this.eax;
  }
  set r0d(value) {
    this.eax = value;
  }
  get r0w() {
    return this.ax;
  }
  set r0w(value) {
    this.ax = value;
  }
  get r0b() {
    return this.al;
  }
  set r0b(value) {
    this.al = value;
  }

  get r1() {
    return this.rbx;
  }
  set r1(value) {
    this.rbx = value;
  }
  get r1d() {
    return this.ebx;
  }
  set r1d(value) {
    this.ebx = value;
  }
  get r1w() {
    return this.bx;
  }
  set r1w(value) {
    this.bx = value;
  }
  get r1b() {
    return this.al;
  }
  set r1b(value) {
    this.al = value;
  }

  get r2() {
    return this.rcx;
  }
  set r2(value) {
    this.rcx = value;
  }
  get r2d() {
    return this.eax;
  }
  set r2d(value) {
    this.eax = value;
  }
  get r2w() {
    return this.ax;
  }
  set r2w(value) {
    this.ax = value;
  }
  get r2b() {
    return this.bl;
  }
  set r2b(value) {
    this.bl = value;
  }

  get r3() {
    return this.rdx;
  }
  set r3(value) {
    this.rdx = value;
  }
  get r3d() {
    return this.edx;
  }
  set r3d(value) {
    this.edx = value;
  }
  get r3w() {
    return this.dx;
  }
  set r3w(value) {
    this.dx = value;
  }
  get r3b() {
    return this.dl;
  }
  set r3b(value) {
    this.dl = value;
  }

  get r4() {
    return this.rbp;
  }
  set r4(value) {
    this.rbp = value;
  }
  get r4d() {
    return this.ebp;
  }
  set r4d(value) {
    this.ebp = value;
  }
  get r4w() {
    return this.bp;
  }
  set r4w(value) {
    this.bp = value;
  }
  get r4b() {
    return this.bpl;
  }
  set r4b(value) {
    this.bpl = value;
  }

  get r5() {
    return this.rsp;
  }
  set r5(value) {
    this.rsp = value;
  }
  get r5d() {
    return this.esp;
  }
  set r5d(value) {
    this.esp = value;
  }
  get r5w() {
    return this.sp;
  }
  set r5w(value) {
    this.sp = value;
  }
  get r5b() {
    return this.spl;
  }
  set r5b(value) {
    this.spl = value;
  }

  get r6() {
    return this.rsi;
  }
  set r6(value) {
    this.rsi = value;
  }
  get r6d() {
    return this.esi;
  }
  set r6d(value) {
    this.esi = value;
  }
  get r6w() {
    return this.si;
  }
  set r6w(value) {
    this.si = value;
  }
  get r6b() {
    return this.sil;
  }
  set r6b(value) {
    this.sil = value;
  }

  get r7() {
    return this.rdi;
  }
  set r7(value) {
    this.rdi = value;
  }
  get r7d() {
    return this.edi;
  }
  set r7d(value) {
    this.edi = value;
  }
  get r7w() {
    return this.di;
  }
  set r7w(value) {
    this.di = value;
  }
  get r7b() {
    return this.dil;
  }
  set r7b(value) {
    this.dil = value;
  }

  get r8() {
    return this.get64(this._r8);
  }
  set r8(value) {
    this.set64(this._r8, value);
  }
  get r8d() {
    return this.get32(this._r8);
  }
  set r8d(value) {
    this.set32(this._r8, value);
  }
  get r8w() {
    return this.get16(this._r8);
  }
  set r8w(value) {
    this.set16(this._r8, value);
  }
  get r8b() {
    return this.get8l(this._r8);
  }
  set r8b(value) {
    this.set8l(this._r8, value);
  }

  get r9() {
    return this.get64(this._r9);
  }
  set r9(value) {
    this.set64(this._r9, value);
  }
  get r9d() {
    return this.get32(this._r9);
  }
  set r9d(value) {
    this.set32(this._r9, value);
  }
  get r9w() {
    return this.get16(this._r9);
  }
  set r9w(value) {
    this.set16(this._r9, value);
  }
  get r9b() {
    return this.get8l(this._r9);
  }
  set r9b(value) {
    this.set8l(this._r9, value);
  }

  get r10() {
    return this.get64(this._r10);
  }
  set r10(value) {
    this.set64(this._r10, value);
  }
  get r10d() {
    return this.get32(this._r10);
  }
  set r10d(value) {
    this.set32(this._r10, value);
  }
  get r10w() {
    return this.get16(this._r10);
  }
  set r10w(value) {
    this.set16(this._r10, value);
  }
  get r10b() {
    return this.get8l(this._r10);
  }
  set r10b(value) {
    this.set8l(this._r10, value);
  }

  get r11() {
    return this.get64(this._r11);
  }
  set r11(value) {
    this.set64(this._r11, value);
  }
  get r11d() {
    return this.get32(this._r11);
  }
  set r11d(value) {
    this.set32(this._r11, value);
  }
  get r11w() {
    return this.get16(this._r11);
  }
  set r11w(value) {
    this.set16(this._r11, value);
  }
  get r11b() {
    return this.get8l(this._r11);
  }
  set r11b(value) {
    this.set8l(this._r11, value);
  }

  get r12() {
    return this.get64(this._r12);
  }
  set r12(value) {
    this.set64(this._r12, value);
  }
  get r12d() {
    return this.get32(this._r12);
  }
  set r12d(value) {
    this.set32(this._r12, value);
  }
  get r12w() {
    return this.get16(this._r12);
  }
  set r12w(value) {
    this.set16(this._r12, value);
  }
  get r12b() {
    return this.get8l(this._r12);
  }
  set r12b(value) {
    this.set8l(this._r12, value);
  }

  get r13() {
    return this.get64(this._r13);
  }
  set r13(value) {
    this.set64(this._r13, value);
  }
  get r13d() {
    return this.get32(this._r13);
  }
  set r13d(value) {
    this.set32(this._r13, value);
  }
  get r13w() {
    return this.get16(this._r13);
  }
  set r13w(value) {
    this.set16(this._r13, value);
  }
  get r13b() {
    return this.get8l(this._r13);
  }
  set r13b(value) {
    this.set8l(this._r13, value);
  }

  get r14() {
    return this.get64(this._r14);
  }
  set r14(value) {
    this.set64(this._r14, value);
  }
  get r14d() {
    return this.get32(this._r14);
  }
  set r14d(value) {
    this.set32(this._r14, value);
  }
  get r14w() {
    return this.get16(this._r14);
  }
  set r14w(value) {
    this.set16(this._r14, value);
  }
  get r14b() {
    return this.get8l(this._r14);
  }
  set r14b(value) {
    this.set8l(this._r14, value);
  }

  get r15() {
    return this.get64(this._r15);
  }
  set r15(value) {
    this.set64(this._r15, value);
  }
  get r15d() {
    return this.get32(this._r15);
  }
  set r15d(value) {
    this.set32(this._r15, value);
  }
  get r15w() {
    return this.get16(this._r15);
  }
  set r15w(value) {
    this.set16(this._r15, value);
  }
  get r15b() {
    return this.get8l(this._r15);
  }
  set r15b(value) {
    this.set8l(this._r15, value);
  }

  get ymm0() {
    return this.getFloat64(this._ymm0);
  }
  set ymm0(value) {
    this.setFloat64(this._ymm0, value);
  }
  get ymm1() {
    return this.getFloat64(this._ymm1);
  }
  set ymm1(value) {
    this.setFloat64(this._ymm1, value);
  }
  get ymm2() {
    return this.getFloat64(this._ymm2);
  }
  set ymm2(value) {
    this.setFloat64(this._ymm2, value);
  }
  get ymm3() {
    return this.getFloat64(this._ymm3);
  }
  set ymm3(value) {
    this.setFloat64(this._ymm3, value);
  }
  get ymm4() {
    return this.getFloat64(this._ymm4);
  }
  set ymm4(value) {
    this.setFloat64(this._ymm4, value);
  }
  get ymm5() {
    return this.getFloat64(this._ymm5);
  }
  set ymm5(value) {
    this.setFloat64(this._ymm5, value);
  }
  get ymm6() {
    return this.getFloat64(this._ymm6);
  }
  set ymm6(value) {
    this.setFloat64(this._ymm6, value);
  }
  get ymm7() {
    return this.getFloat64(this._ymm7);
  }
  set ymm7(value) {
    this.setFloat64(this._ymm7, value);
  }
  get ymm8() {
    return this.getFloat64(this._ymm8);
  }
  set ymm8(value) {
    this.setFloat64(this._ymm8, value);
  }
  get ymm9() {
    return this.getFloat64(this._ymm9);
  }
  set ymm9(value) {
    this.setFloat64(this._ymm9, value);
  }
  get ymm10() {
    return this.getFloat64(this._ymm10);
  }
  set ymm10(value) {
    this.setFloat64(this._ymm10, value);
  }
  get ymm11() {
    return this.getFloat64(this._ymm11);
  }
  set ymm11(value) {
    this.setFloat64(this._ymm11, value);
  }
  get ymm12() {
    return this.getFloat64(this._ymm12);
  }
  set ymm12(value) {
    this.setFloat64(this._ymm12, value);
  }
  get ymm13() {
    return this.getFloat64(this._ymm13);
  }
  set ymm13(value) {
    this.setFloat64(this._ymm13, value);
  }
  get ymm14() {
    return this.getFloat64(this._ymm14);
  }
  set ymm14(value) {
    this.setFloat64(this._ymm14, value);
  }
  get ymm15() {
    return this.getFloat64(this._ymm15);
  }
  set ymm15(value) {
    this.setFloat64(this._ymm15, value);
  }

  get xmm0() {
    return this.getFloat32(this._ymm0);
  }
  set xmm0(value) {
    this.setFloat32(this._ymm0, value);
  }
  get xmm1() {
    return this.getFloat32(this._ymm1);
  }
  set xmm1(value) {
    this.setFloat32(this._ymm1, value);
  }
  get xmm2() {
    return this.getFloat32(this._ymm2);
  }
  set xmm2(value) {
    this.setFloat32(this._ymm2, value);
  }
  get xmm3() {
    return this.getFloat32(this._ymm3);
  }
  set xmm3(value) {
    this.setFloat32(this._ymm3, value);
  }
  get xmm4() {
    return this.getFloat32(this._ymm4);
  }
  set xmm4(value) {
    this.setFloat32(this._ymm4, value);
  }
  get xmm5() {
    return this.getFloat32(this._ymm5);
  }
  set xmm5(value) {
    this.setFloat32(this._ymm5, value);
  }
  get xmm6() {
    return this.getFloat32(this._ymm6);
  }
  set xmm6(value) {
    this.setFloat32(this._ymm6, value);
  }
  get xmm7() {
    return this.getFloat32(this._ymm7);
  }
  set xmm7(value) {
    this.setFloat32(this._ymm7, value);
  }
  get xmm8() {
    return this.getFloat32(this._ymm8);
  }
  set xmm8(value) {
    this.setFloat32(this._ymm8, value);
  }
  get xmm9() {
    return this.getFloat32(this._ymm9);
  }
  set xmm9(value) {
    this.setFloat32(this._ymm9, value);
  }
  get xmm10() {
    return this.getFloat32(this._ymm10);
  }
  set xmm10(value) {
    this.setFloat32(this._ymm10, value);
  }
  get xmm11() {
    return this.getFloat32(this._ymm11);
  }
  set xmm11(value) {
    this.setFloat32(this._ymm11, value);
  }
  get xmm12() {
    return this.getFloat32(this._ymm12);
  }
  set xmm12(value) {
    this.setFloat32(this._ymm12, value);
  }
  get xmm13() {
    return this.getFloat32(this._ymm13);
  }
  set xmm13(value) {
    this.setFloat32(this._ymm13, value);
  }
  get xmm14() {
    return this.getFloat32(this._ymm14);
  }
  set xmm14(value) {
    this.setFloat32(this._ymm14, value);
  }
  get xmm15() {
    return this.getFloat32(this._ymm15);
  }
  set xmm15(value) {
    this.setFloat32(this._ymm15, value);
  }

  /**
   * https://en.wikipedia.org/wiki/FLAGS_register
   */
  get rflag() {
    return this.get64(this._rflag);
  }
  get eflag() {
    return this.get32(this._rflag);
  }
  get flag() {
    return this.get16(this._rflag);
  }

  get CF() {
    return ((this.rflag & 0x0001) >> 0) as 0 | 1;
  }
  set CF(value: 0 | 1) {
    if (value === this.CF) return;
    this.set64(this._rflag, this.rflag ^ 1);
  }
  get PF() {
    return ((this.rflag & 0x0004) >> 2) as 0 | 1;
  }
  set PF(value: 0 | 1) {
    if (value === this.PF) return;
    this.set64(this._rflag, this.rflag ^ (1 << 2));
  }
  get AF() {
    return ((this.rflag & 0x0010) >> 4) as 0 | 1;
  }
  set AF(value: 0 | 1) {
    if (value === this.AF) return;
    this.set64(this._rflag, this.rflag ^ (1 << 4));
  }

  get ZF() {
    return ((this.rflag & 0x0040) >> 6) as 0 | 1;
  }
  set ZF(value: 0 | 1) {
    if (value === this.ZF) return;
    this.set64(this._rflag, this.rflag ^ (1 << 6));
  }

  get SF() {
    return ((this.rflag & 0x0080) >> 7) as 0 | 1;
  }
  set SF(value: 0 | 1) {
    if (value === this.SF) return;
    this.set64(this._rflag, this.rflag ^ (1 << 7));
  }

  get TF() {
    return ((this.rflag & 0x0100) >> 8) as 0 | 1;
  }
  set TF(value: 0 | 1) {
    if (value === this.TF) return;
    this.set64(this._rflag, this.rflag ^ (1 << 8));
  }

  get IF() {
    return ((this.rflag & 0x0200) >> 9) as 0 | 1;
  }
  set IF(value: 0 | 1) {
    if (value === this.IF) return;
    this.set64(this._rflag, this.rflag ^ (1 << 9));
  }

  get DF() {
    return ((this.rflag & 0x0400) >> 10) as 0 | 1;
  }
  set DF(value: 0 | 1) {
    if (value === this.DF) return;
    this.set64(this._rflag, this.rflag ^ (1 << 10));
  }

  get OF() {
    return ((this.rflag & 0x0800) >> 11) as 0 | 1;
  }
  set OF(value: 0 | 1) {
    if (value === this.OF) return;
    this.set64(this._rflag, this.rflag ^ (1 << 11));
  }
}
