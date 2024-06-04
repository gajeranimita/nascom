export default async function decorate(block) {
[...block.children].forEach((row) => {
  const label = row.children[0];
  const title = document.createElement('div');
  title.className = 'section-title-custom';
  title.append(...label.childNodes);
  block.prepend(title);
});

}