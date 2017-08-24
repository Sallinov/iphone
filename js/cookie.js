function Lang(type){
  switch (type) {
    case "en":
      document.cookie = "info=<div>Keep Your Private</div><div>Photos & Videos</div><div>Secure</div>|<div>7-Day Free Trial</div>";
      ready();
      break;
    case "es":
      document.cookie = "info=<div>Mantén Seguras Tus Fotos y</div><div>Vídeos</div><div>Privados</div>|<div>Prueba gratuita de 7 días</div>";
      ready();
      break;
    case "de":
      document.cookie = "info=<div>Halten Sie Ihre privaten</div><div>Fotos & Videos</div><div>geheim</div>|<div>7-tägige Gratis-Version</div>";
      ready();
      break;
    case "fr":
      document.cookie = "info=<div>Protégez Vos Photos</div><div>et Vidéos</div><div>Privées</div>|<div>7 jours d'essai gratuit</div>";
      ready();
      break;
    case "ja":
      document.cookie = "info=<div>プライベート写真と</div><div>動画を安全に</div><div>保つ</div>|<div>7日間無料トライアル</div>";
      ready();
      break;
    case "it":
      document.cookie = "info=<div>Tieni al Sicuro i Tuoi</div><div>Video e Foto</div><div>Private</div>|<div>Prova gratuita di 7 giorni</div>";
      ready();
      break;
    case "ru":
      document.cookie = "info=<div>Держите Личные Фото и Видео</div><div>под Надежной</div><div>Защитой</div>|<div>7-дневная пробная версия</div>";
      ready();
  }
}
function getcookie(cookie_name){
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
  return unescape ( results[2] );
  document.getElementsByClassName().style.height = block;
}
function ready() {
  if(document.cookie.match('info')){
    var arr = getcookie('info').split('|');
    document.getElementById("desc").innerHTML=arr[0];
    document.getElementById("treall").innerHTML=arr[1];
  }
}
document.addEventListener("DOMContentLoaded", ready);
