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
  // filesLocation: "assets/i18n",
  filesLocation: "https://raw.githubusercontent.com/huylesitdn/ob9-game/main/build/assets/i18n",
});

const PREFERED_REGION = "preferred_region";
const _get_translator_config =
  translator.config.persistKey || "preferred_language";
const _get_language =
  localStorage.getItem(_get_translator_config) || LANGUAGES.EN;
const _get_region = localStorage.getItem(PREFERED_REGION) || "Singapore";

translator.fetch([LANGUAGES.EN, LANGUAGES.ZH]).then(() => {
  // -> Translations are ready...
  translator.translatePageTo(_get_language);
  initialize();
});

/**
 * MENU SLIDE
 *
 */

$(".my-navbar .currentLanguage").html(_get_language);
$(".my-navbar .chooseLanguage").on("click", function (e) {
  e.preventDefault();
  const select_language = $(this).data("language");
  console.log(select_language)
  if (LANGUAGES[select_language]) {
    const newLanguage = LANGUAGES[select_language]
    translator.translatePageTo(newLanguage);
    $(".my-navbar .currentLanguage").html(newLanguage);
    // window.location.reload();
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

function initialize() {}

console.log("--- index.jsaaa");
