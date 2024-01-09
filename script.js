const kqxs = document.getElementById('kqxs')
const sbc = document.getElementById('sbc')
const loi = document.getElementById('loi')


function ketqua() {
    let kqxsValue = kqxs.value;
    let sbcValue = sbc.value;
    console.log(kqxsValue,sbcValue)
    if(kqxsValue.length < 6 || sbcValue.length < 6) {
        loitoggle(true,'Chưa nhập đủ số')
        return;
    }

    let ketquastring = '';
    let x = Math.abs(kqxsValue - sbcValue);
    let ketqua = 1000000 - x;


    ketquastring =`
    Hệ số X = ${x}
    Tiền lì xì:
    1000.000.đ - ${x} = ${ketqua} VNĐ
    <div class="ketqua">${ketqua} VNĐ</div>`
    document.getElementById('lc').innerHTML = ketquastring;
}

function loitoggle(isShow,noidung) {
    if(isShow) {
        loi.style.display = 'block';
        loi.innerHTML = noidung;
    } else {
        loi.style.display = 'none';
    }
}

function luatchoi() {
    document.getElementById('lc').innerHTML = `
    Bước 1: Dự đoán giải đặc biệt gồm 6 số 
    (đăng ký trước ngày 10/02/2024)

    Bước 2: Chờ kết quả xổ số TPHCM 
    ngày 10/02/2024
    
    Bước 3: Tính kết quả số tiền lì xì 
    trên website 
    hoặc có thể tự tính như sau:
        Bước 3.1 Tính hệ số X
        A là số bạn chọn
        B là giải đặc biệt xổ số 
        TPHCM ngày 10/02/2024
        X = |A - B| (giá trị tuyệt đối của A - B)
        Bước 3.2 Tính số tiền lì xì mà bạn sẽ 
        được nhận
        Tiền lì xì = 1000000 - X
        Có nghĩa là khoản cách số dự đoán của 
        bạn đến kết quả xổ số càng nhỏ 
        tiền lì xì càng cao

    Bước 4: Nhận tiền lì xì về tài khoản thôi ^^`
}