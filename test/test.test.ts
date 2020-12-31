import { AsmRegister } from "../src";

describe("test Register", () => {
  it("test rax", () => {
    const r = new AsmRegister();
    r.rax = 0xaaffeeddcc;
    expect(r.rax).toBe(0xaaffeeddcc);
    expect(r.eax).toBe(0xffeeddcc);
    expect(r.ax).toBe(0xddcc);
    expect(r.ah).toBe(0xdd);
    expect(r.al).toBe(0xcc);
  });
  it("test rbx", () => {
    const r = new AsmRegister();
    r.rbx = 0xaaffeeddcc;
    expect(r.rbx).toBe(0xaaffeeddcc);
    expect(r.ebx).toBe(0xffeeddcc);
    expect(r.bx).toBe(0xddcc);
    expect(r.bh).toBe(0xdd);
    expect(r.bl).toBe(0xcc);
  });
  it("test rcx", () => {
    const r = new AsmRegister();
    r.rcx = 0xaaffeeddcc;
    expect(r.rcx).toBe(0xaaffeeddcc);
    expect(r.ecx).toBe(0xffeeddcc);
    expect(r.cx).toBe(0xddcc);
    expect(r.ch).toBe(0xdd);
    expect(r.cl).toBe(0xcc);
  });
  it("test rdx", () => {
    const r = new AsmRegister();
    r.rdx = 0xaaffeeddcc;
    expect(r.rdx).toBe(0xaaffeeddcc);
    expect(r.edx).toBe(0xffeeddcc);
    expect(r.dx).toBe(0xddcc);
    expect(r.dh).toBe(0xdd);
    expect(r.dl).toBe(0xcc);
  });
  it("test rsi", () => {
    const r = new AsmRegister();
    r.rsi = 0xaaffeeddcc;
    expect(r.rsi).toBe(0xaaffeeddcc);
    expect(r.esi).toBe(0xffeeddcc);
    expect(r.si).toBe(0xddcc);
    expect(r.sih).toBe(0xdd);
    expect(r.sil).toBe(0xcc);
  });
  it("test rdi", () => {
    const r = new AsmRegister();
    r.rdi = 0xaaffeeddcc;
    expect(r.rdi).toBe(0xaaffeeddcc);
    expect(r.edi).toBe(0xffeeddcc);
    expect(r.di).toBe(0xddcc);
    expect(r.dih).toBe(0xdd);
    expect(r.dil).toBe(0xcc);
  });
  it("test rbp", () => {
    const r = new AsmRegister();
    r.rbp = 0xaaffeeddcc;
    expect(r.rbp).toBe(0xaaffeeddcc);
    expect(r.ebp).toBe(0xffeeddcc);
    expect(r.bp).toBe(0xddcc);
    expect(r.bph).toBe(0xdd);
    expect(r.bpl).toBe(0xcc);
  });
  it("test rsp", () => {
    const r = new AsmRegister();
    r.rsp = 0xaaffeeddcc;
    expect(r.rsp).toBe(0xaaffeeddcc);
    expect(r.esp).toBe(0xffeeddcc);
    expect(r.sp).toBe(0xddcc);
    expect(r.sph).toBe(0xdd);
    expect(r.spl).toBe(0xcc);
  });
  it("test r8", () => {
    const r = new AsmRegister();
    r.r8 = 0xaaffeeddcc;
    expect(r.r8).toBe(0xaaffeeddcc);
    expect(r.r8d).toBe(0xffeeddcc);
    expect(r.r8w).toBe(0xddcc);
    expect(r.r8b).toBe(0xcc);
  });
  it("test r9", () => {
    const r = new AsmRegister();
    r.r9 = 0xaaffeeddcc;
    expect(r.r9).toBe(0xaaffeeddcc);
    expect(r.r9d).toBe(0xffeeddcc);
    expect(r.r9w).toBe(0xddcc);
    expect(r.r9b).toBe(0xcc);
  });
  it("test r10", () => {
    const r = new AsmRegister();
    r.r10 = 0xaaffeeddcc;
    expect(r.r10).toBe(0xaaffeeddcc);
    expect(r.r10d).toBe(0xffeeddcc);
    expect(r.r10w).toBe(0xddcc);
    expect(r.r10b).toBe(0xcc);
  });
  it("test r11", () => {
    const r = new AsmRegister();
    r.r11 = 0xaaffeeddcc;
    expect(r.r11).toBe(0xaaffeeddcc);
    expect(r.r11d).toBe(0xffeeddcc);
    expect(r.r11w).toBe(0xddcc);
    expect(r.r11b).toBe(0xcc);
  });
  it("test r12", () => {
    const r = new AsmRegister();
    r.r12 = 0xaaffeeddcc;
    expect(r.r12).toBe(0xaaffeeddcc);
    expect(r.r12d).toBe(0xffeeddcc);
    expect(r.r12w).toBe(0xddcc);
    expect(r.r12b).toBe(0xcc);
  });
  it("test r13", () => {
    const r = new AsmRegister();
    r.r13 = 0xaaffeeddcc;
    expect(r.r13).toBe(0xaaffeeddcc);
    expect(r.r13d).toBe(0xffeeddcc);
    expect(r.r13w).toBe(0xddcc);
    expect(r.r13b).toBe(0xcc);
  });
  it("test r14", () => {
    const r = new AsmRegister();
    r.r14 = 0xaaffeeddcc;
    expect(r.r14).toBe(0xaaffeeddcc);
    expect(r.r14d).toBe(0xffeeddcc);
    expect(r.r14w).toBe(0xddcc);
    expect(r.r14b).toBe(0xcc);
  });
  it("test r15", () => {
    const r = new AsmRegister();
    r.r15 = 0xaaffeeddcc;
    expect(r.r15).toBe(0xaaffeeddcc);
    expect(r.r15d).toBe(0xffeeddcc);
    expect(r.r15w).toBe(0xddcc);
    expect(r.r15b).toBe(0xcc);
  });

  it("test xmm", () => {
    const r = new AsmRegister();
    r.xmm0 = 1.23;
    expect(r.xmm0).toBe(1.23);
  });

  it("test ymm", () => {
    const r = new AsmRegister();
    r.ymm0 = 1.23;
    expect(r.ymm0).toBe(1.23);
  });
});