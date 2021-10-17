/**
 * Нормализация номера телефона
 * Используется устаревший JS, чтобы этот код был совместим с GTM
 */
function phone_normalize(tel){
    if (tel.toString().length < 8) return tel;
    tel = tel.toString().replace(/[^0-9+]/g, '');
    tel = (tel.substring(0,1) != '+' && tel.length < 11) ? '+7' + tel : tel;    
    tel = (tel.substring(0,1) == '8' && tel.length == 11) ? tel.replace(/^8/, '+7') : tel;
    tel = (/^\+/.test(tel)) ? tel : '+' + tel;
    return tel;
}