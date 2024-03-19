var situation2_group_template = `
    <div class="lar-middle">
    <div class="survey1-paragraph">
      <p class="survey1-paragraph-body lar-font2" style="margin-top: 20px;font-weight: bolder" data-i18n='litw-situation2_group-p1'></p>
      <span class="survey1-paragraph-body fst-italic" style="font-weight: bolder;" data-i18n='litw-situation2_group-s1'></span>
      <p class="survey1-paragraph-body" data-i18n='litw-situation2_group-p2'></p>
    </div>

    <div class="survey1-paragraph" id="YA">
      <p class="survey1-paragraph-body" data-i18n='litw-sur2-body-group-p1' style="font-weight: bolder"></p>
      <ul>
        <li class="content"><span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-s1' style="font-weight: bolder"></span>
          <span class="survey1-paragraph-body" data-i18n='litw-sur2-body-YA-p1'></span>
        </li>
        <li class="content">
          <p class="survey1-paragraph-body" data-i18n='litw-situation2_group-p3' style="font-weight: bolder"></p>
        </li>
      </ul>

      <img class="survey1-img" src="../WechatIMG1020.jpg" alt="For every 100 Reddit users who made NA judgements, 84 users are very certain in NA">
      <p class="survey1-paragraph-body lar-font" data-i18n='litw-situation2_group-p4' style="font-weight: bolder"></p>
      <form id="myForm2" class="form needs-validation" novalidate>
        <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"   name="YA-options" id="YA-option1" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label" for="YA-option1" data-i18n='litw-sur2-body-ans-la1'></label><br>
        <input type="radio" class="btn-check form-check-input" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"  name="YA-options" id="YA-option2" autocomplete="off" required>
        <label class="btn btn-light jud form-check-label" for="YA-option2" data-i18n='litw-sur2-body-ans-la2'></label>

        <div class="YA-room">
          <div class="collapse" id="collapseExample1">
            <div class="card-body answer">
              <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-ans-s1'></span>
            </div>
          </div>
          <div class="collapse" id="collapseExample2">
            <div class="card-body answer">
              <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-ans-s2'></span>
            </div>
          </div>
        </div>


        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-body-cho-p1' style="font-weight: bolder;"></p>

        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option3" autocomplete="off" required>
        <label class="btn  btn-light cho form-check-label" for="YA-option3" data-target="#ans-1" data-i18n='litw-sur2-body-cho-la1'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option4" autocomplete="off" required>
        <label class="btn  btn-light cho form-check-label" for="YA-option4" data-target="#ans-2" data-i18n='litw-sur2-body-cho-la2'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option5" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option5" data-target="#ans-3" data-i18n='litw-sur2-body-cho-la3'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option6" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option6" data-target="#ans-4" data-i18n='litw-sur2-body-cho-la4'></label>
        <input type="radio" class="btn-check form-check-input" name="YA-decision" id="YA-option7" autocomplete="off" required>
        <label class="btn btn-light cho form-check-label" for="YA-option7" data-target="#ans-5" data-i18n='litw-sur2-body-cho-la5'></label>


        <div class="survey1-paragraph-body YA-ans" id="ans-1">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an1'></span>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-2">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an2'></span>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-3">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an3'></span>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-4">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an4'></span>
        </div>
        <div class="survey1-paragraph-body YA-ans" id="ans-5">
          <span class="survey1-paragraph-body mid-font" data-i18n='litw-sur2-body-YA-an5'></span>
        </div>


        <p class="survey1-paragraph-body lar-font" data-i18n='litw-sur2-group-reason-p1' style="font-weight: bolder;margin-top: 50px"></p>
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" required></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <div class="invalid-feedback">
          Please answer the above questions.
        </div>
        <script>
          (() => {
                    'use strict'
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    const forms = document.querySelectorAll('.needs-validation')
                
                    // Loop over them and prevent submission
                    Array.from(forms).forEach(form => {
                    form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                    event.stopPropagation()
                }
                
                    form.classList.add('was-validated')
                }, false)
                })
                })()
      </script>
        <button type="submit" class="btn btn-secondary custom" id="sub2" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; width: auto; margin-top: 30px" onclick="if(this.form.checkValidity()) {    $('#btn-next-page').click(); }else {  this.form.stopPropagation(); } return false;">Next</button>
      </form>
    </div>

  </div>

  <div style="display: block;width: 100%;height: 300px;"></div>
<script>
      document.getElementById('YA-option1').addEventListener('click', function() {
        document.getElementById('collapseExample2').classList.remove('show');
      });
    
      document.getElementById('YA-option2').addEventListener('click', function() {
        document.getElementById('collapseExample1').classList.remove('show');
      });
    
      const label_situation2 = document.querySelectorAll('.cho');
      label_situation2.forEach(label => {
                label.addEventListener('click', function() {
                    const targetId = this.getAttribute('data-target');
                    const target = document.querySelector(targetId);
                    if (target) {
                        document.querySelectorAll('.YA-ans').forEach(ans => {
                            ans.style.display = 'none';
                        });
                        target.style.display = 'block';
                    }
         });
      });
</script>
`;

module.exports = situation2_group_template;