const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-navigation");
const languageToggle = document.querySelector(".language-toggle");

const translations = {
  ar: {
    navApproach: "فكرتنا",
    navCollection: "أسلوبنا",
    navStory: "حكاية ديبو",
    heroEyebrow: "أزياء رجالية عصرية بروح مصرية",
    heroTitle: "أبسط.<br />وأجمل <em>بكتير.</em>",
    heroDescription:
      "اللبس مش لازم يكون معقد. ديبو علامة أزياء رجالية مصرية بتقدم أسلوب بسيط ومدروس يناسب كل يوم.",
    heroLink: "اكتشف فكرتنا",
    heroIndex: "٠٠١ — من مصر، لكل يوم",
    heroImageAlt: "رجل يرتدي إطلالة يومية مريحة بألوان هادئة",
    heroCaption: "لبس مريح. يوم أحلى. ببساطة.",
    scrollCue: "كمّل واكتشف",
    philosophyEyebrow: "كلمتين عن اللبس",
    philosophyTitle: "ستايل حلو<br />مش محتاج <em>مجهود.</em>",
    philosophyTextOne:
      "القميص اللي بتمد إيدك عليه من غير تفكير. القَصّة اللي تحس إنها شبهك. وقطع تفضل معاك وتبقى جزء من يومك.",
    philosophyTextTwo:
      "إحنا مؤمنين إن أحسن دولاب مش أكبر دولاب، هو اللي كل حاجة فيه ليها معنى ومكان.",
    philosophyNote: "دي هي فكرة ديبو.",
    collectionEyebrow: "من هنا، ولكل يوم",
    collectionTitle: "خليك <em>على طبيعتك.</em>",
    collectionDescription: "طبقات مريحة. خامات تحبها.<br />وتفاصيل تفرق في كل يوم.",
    imageAltOne: "إطلالة يومية بألوان دافئة وطبيعية",
    cardOne: "ليومك، زي ما هو",
    imageAltTwo: "أسلوب مريح يعبر عن شخصية صاحبه",
    cardTwo: "ستايلك إنت، دايمًا",
    imageAltThree: "إطلالة بسيطة تناسب يومًا هادئًا",
    cardThree: "على طبيعتك، من غير تكلف",
    storyImageAlt: "إطلالة مريحة تعبر عن ثقة وأسلوب شخصي",
    storyCaption: "لأي مكان ياخدك يومك.",
    storyEyebrow: "حكاية مصرية بطابع مختلف",
    storyTitle: "ديبو مصرية.<br />وعلى مزاج <em>حياتك.</em>",
    storyBody:
      "ديبو علامة أزياء رجالية مصرية بفكرة بسيطة: لبسك اليومي لازم يبقى شبهك. استلهمنا روح الحياة في مصر ودفاها وحيويتها، وقدمنا أسلوب بسيط ومريح تلبسه على طريقتك.",
    signoff: "مبسوطين إنك هنا.",
    signoffTeam: "— فريق ديبو",
    closingEyebrow: "من مصر، وبأسلوب يشبهك",
    closingTitle: "البس اللي يعبّر <em>عنك.</em>",
    backToTop: "ارجع للبداية",
    footerTagline: "بساطة أكتر. وأسلوب يشبهك.",
  },
  en: {
    navApproach: "Our approach",
    navCollection: "Our style",
    navStory: "Our story",
    heroEyebrow: "Modern menswear, with Egyptian roots",
    heroTitle: "Less, but<br />so much <em>better.</em>",
    heroDescription:
      "Getting dressed shouldn’t be complicated. Diboo is an Egyptian menswear brand bringing an easy, considered point of view to the days that make up a life.",
    heroLink: "Get to know us",
    heroIndex: "001 — Rooted in Egypt, made for everyday",
    heroImageAlt: "A man in a relaxed, neutral-toned outfit on a sunlit city street",
    heroCaption: "Good clothes. Good days. No fuss.",
    scrollCue: "Scroll a little",
    philosophyEyebrow: "A note on getting dressed",
    philosophyTitle: "Good style doesn’t<br />have to <em>say a lot.</em>",
    philosophyTextOne:
      "It’s the shirt you reach for without thinking. The fit that feels like you. The pieces that find their place in your life, and stay there.",
    philosophyTextTwo:
      "We believe the best wardrobe isn’t the biggest one. It’s the one that simply makes sense.",
    philosophyNote: "That’s the Diboo idea.",
    collectionEyebrow: "Rooted here, made for everyday",
    collectionTitle: "Room to be <em>yourself.</em>",
    collectionDescription: "Easy layers. Honest textures.<br />The everyday, made a little better.",
    imageAltOne: "A considered everyday look in warm, natural colours",
    cardOne: "Made for your everyday",
    imageAltTwo: "Relaxed personal style, worn with confidence",
    cardTwo: "Always, entirely you",
    imageAltThree: "A quiet moment and an easy-to-wear outfit",
    cardThree: "Nothing to prove",
    storyImageAlt: "A relaxed portrait that captures a confident, personal sense of style",
    storyCaption: "For wherever the day takes you.",
    storyEyebrow: "An Egyptian point of view",
    storyTitle: "Proudly Egyptian.<br />Made for <em>real life.</em>",
    storyBody:
      "Diboo is an Egyptian menswear brand with a simple idea: everyday style should feel like you. Inspired by the character, warmth and energy of life in Egypt, we bring a refreshingly uncomplicated point of view to what you wear.",
    signoff: "Good to have you here.",
    signoffTeam: "— Team Diboo",
    closingEyebrow: "From Egypt, with a point of view",
    closingTitle: "Wear what feels <em>like you.</em>",
    backToTop: "Back to the beginning",
    footerTagline: "A little less noise. A little more you.",
  },
};

function setLanguage(language) {
  const isArabic = language === "ar";
  const copy = translations[language];

  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.title = isArabic ? "ديبو — البساطة بشكل أفضل" : "Diboo — Less, but better.";
  document.querySelector('meta[name="description"]').content = isArabic
    ? "تعرّف على ديبو، علامة أزياء رجالية مصرية تقدم أسلوبًا يوميًا بسيطًا ومدروسًا."
    : "Meet Diboo, an Egyptian menswear brand bringing a considered, uncomplicated point of view to everyday style.";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = copy[element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((image) => {
    image.alt = copy[image.dataset.i18nAlt];
  });

  document.querySelector(".site-navigation").setAttribute(
    "aria-label",
    isArabic ? "القائمة الرئيسية" : "Main navigation",
  );
  menuToggle.setAttribute("aria-label", isArabic ? "فتح القائمة" : "Open navigation");
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.querySelector(".scroll-cue").setAttribute(
    "aria-label",
    isArabic ? "اكتشف فكرتنا" : "Scroll to our approach",
  );
  document.querySelectorAll(".wordmark").forEach((wordmark) => {
    wordmark.setAttribute("aria-label", isArabic ? "العودة إلى ديبو" : "Diboo, back to top");
  });
  languageToggle.textContent = isArabic ? "English" : "العربية";
  languageToggle.setAttribute(
    "aria-label",
    isArabic ? "Switch to English" : "التبديل إلى العربية",
  );
}

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute(
    "aria-label",
    document.documentElement.lang === "ar" ? "فتح القائمة" : "Open navigation",
  );
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  const language = document.documentElement.lang;
  menuToggle.setAttribute(
    "aria-label",
    language === "ar"
      ? isExpanded
        ? "فتح القائمة"
        : "إغلاق القائمة"
      : isExpanded
        ? "Open navigation"
        : "Close navigation",
  );
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeNavigation();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavigation();
  }
});

languageToggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
setLanguage("ar");
