import {buildBlock} from '../../scripts/aem.js';
export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`columns-${cols.length}-cols`);
    // setup image columns
    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            const h2 = col.querySelector('h2');
            const picture = col.querySelector('picture');
            let button = col.querySelector('.button-container');
            if (h2 && picture && (h2.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
                const section = document.createElement('div');
                section.classList.add('overlay-item');
                section.append(picture);
                const overlaycontent = document.createElement('div');
                overlaycontent.classList.add('content-overlay');
                overlaycontent.append(h2);
                if(button){
                    overlaycontent.append(button);
                }
                section.append(overlaycontent);
                block.prepend(section);
            }
        });
    });
}
