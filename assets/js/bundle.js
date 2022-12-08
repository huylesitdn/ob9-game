
// Translator

const LANGUAGES = {
  EN: "en",
  ZH: "zh",
};

var translator = new Translator({
  defaultLanguage: "en",
  detectLanguage: true,
  selector: "[data-i18n]",
  debug: false,
  registerGlobally: "__",
  persist: true,
  persistKey: "preferred_language",
  filesLocation: "assets/i18n",
  // filesLocation: "https://raw.githubusercontent.com/huylesitdn/12goal/main/assets/i18n",
});

const PREFERED_REGION = 'preferred_region';
const _get_translator_config = translator.config.persistKey || "preferred_language";
const _get_language = localStorage.getItem(_get_translator_config) || LANGUAGES.EN;
const _get_region = localStorage.getItem(PREFERED_REGION) || 'Singapore';

translator.fetch([LANGUAGES.EN, LANGUAGES.ZH]).then(() => {
  // -> Translations are ready...
  translator.translatePageTo(_get_language);
  initialize();
});

/**
 * MENU SLIDE
 *
 */


const selectLanguageModalElm = $("#selectLanguage");
if (selectLanguageModalElm.length > 0) {
  var selectLanguageModal = new bootstrap.Modal(selectLanguageModalElm, {});
}
$(".choose-language").on("click", function (e) {
  const select_language = $(this).data("language");
  const select_region = $(this).data("region");
  const accept_languages = ['Malaysia', 'Singapore']

  if (!accept_languages.includes(select_region)) {
    window.location.href = '/access-denied.html';
    return false;
  }


  if (LANGUAGES[select_language]) {
    translator.translatePageTo(LANGUAGES[select_language]);
    selectLanguageModal.hide();
    $("#mySidenav").removeClass("active");
    localStorage.setItem(PREFERED_REGION, select_region)
    window.location.reload();
  } else {
    console.log("No language setup");
  }
});


/**
 * MENU SLIDE
 *
 */


/**
 * 
 * INITIAL AFTER HAVE translator
 * 
 */

function initialize () {

}

console.log("--- index.jsaaa");
