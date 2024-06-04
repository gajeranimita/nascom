export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    row.classList.add('ourcategories-content');
    [...row.children].forEach((col) => {
      col.classList.add('ourcategories-view');
      let pic = col.querySelector('p > picture');
      if (pic) {

        let picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length >= 1) {
          picWrapper.classList.add('columns-img-col');
        }
        picWrapper.querySelector('h2').classList.add('title-small');
        let buttoncontainer= picWrapper.querySelector('.button-container > a');
        buttoncontainer.classList.remove('button');
      }
    });
  });
}
