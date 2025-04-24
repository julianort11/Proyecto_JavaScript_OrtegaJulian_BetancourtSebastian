export function renderContact(mainContent) {
  mainContent.innerHTML = `
  <div class="div__contact">
    <h2>Contact</h2>
    <p>Information:</p>
    <p>For inquiries</p>
  </div>
  <div class="div__name">
    <div class="div__name_img">
      <h4>Julian Ortega</h4>
      <div class="backgr__img">
        <div class="backgr__img_git">
          <a href="https://github.com/julianort11"><img src="../../assets/img/github.png" alt="GitHub"></a>
        </div>
        <div class="backgr__img_insta">
          <a href="https://www.instagram.com/ort_ga._?igsh=b2tjcWF2dHdiMGVi&utm_source=qr"><img src="../../assets/img/instagram.png" alt="Instagram"></a>
        </div>
      </div>

      <h4>Setabastian Betancourt</h4>
      <div class="backgr__img">
        <div class="backgr__img_git">
          <a href="https://github.com/sebasBetancourt"><img src="../../assets/img/github.png" alt="GitHub"></a>
        </div>
        <div class="backgr__img_insta">
          <a href="https://www.instagram.com/08________sb/?hl=en"><img src="../../assets/img/instagram.png" alt="Instagram"></a>
        </div>
      </div>
    </div>
  </div>
`;
}
