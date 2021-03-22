const container = document.querySelector('.container');
const images = document.querySelectorAll('img');
const maxWidth = 1640;
const maxHeight = 166.5;

initializePage();

function initializePage() {
    container.addEventListener('mouseenter', mouseEnterHandler);
    container.addEventListener('mousemove', mouseMoveHandler);
    container.addEventListener('mouseleave', mouseLeaveHandler);
}

function mouseEnterHandler(e) {
    this.x = e.clientX;
    images.forEach(item => {
        item.style.translation = 'none';
    });
}

function mouseMoveHandler(e) {
    this._x = e.clientX;
    let disX = this._x - this.x;

    // image0: background hills
    const translate_0 = 0 - (100 * disX / maxWidth);
    images[0].style.transform = `scale(1) translate(${translate_0}px, -15px) rotate(0deg)`;

    // image1: hills and boats
    const translate_1 = 1100 - (100 * disX / maxWidth);
    images[1].style.transform = `scale(1) translate(${translate_1}px, 0px) rotate(0deg)`;

    // image2: trees and boats
    const translate_2 = 675 - (135 * disX / maxWidth);
    images[2].style.transform = `scale(1) translate(${translate_2}px, -5px) rotate(0deg)`;

    // image3: bridge
    const translate_3 = -637 - (441 * disX / maxWidth);
    images[3].style.transform = `scale(1) translate(${translate_3}px, 0px) rotate(0deg)`;

    // image4: boats
    const translate_4 = 607.5 - (112.5 * disX / maxWidth);
    images[4].style.transform = `scale(1) translate(${translate_4}px, 45px) rotate(0deg)`;

    // image5: 2233 boat
    const translate_5 = 252 - (56 * disX / maxWidth);
    const opacity_5 = (translate_5 > 228.6) ? ((252 - translate_5) / 23.4) : 1;
    images[5].style.transform = `scale(1) translate(${translate_5}px, 36.4px) rotate(0deg)`;
    images[5].style.opacity = `${opacity_5}`;

    // image6: sakura
    const translate_6 = 112 - (700 * disX / maxWidth);
    images[6].style.transform = `scale(1) translate(${translate_6}px, 21px) rotate(0deg)`;

    // image7: family
    const translate_7 = -350 - (840 * disX / maxWidth);
    images[7].style.transform = `scale(1) translate(${translate_7}px, 49px) rotate(0deg)`;

    // image8: 22 kite
    const translate_8 = -240 - (400 * disX / maxWidth);
    const opacity_8 = (translate_8 < -40) ? ((translate_8 + 240) / 200) : 1;
    images[8].style.transform = `scale(1) translate(${translate_8}px, 16px) rotate(0deg)`;
    images[8].style.opacity = `${opacity_8}`;

    // image9: 33
    const translate_9 = -340 - (580 * disX / maxWidth);
    const opacity_9 = (translate_9 < -50) ? ((translate_9 + 340) / 290) : 1;
    images[9].style.transform = `scale(1) translate(${translate_9}px, 32px) rotate(0deg)`;
    images[9].style.opacity = `${opacity_9}`;

    // image10: two sakuras
    const translate_10 = -90 - (1125 * disX / maxWidth);
    images[10].style.transform = `scale(1) translate(${translate_10}px, 13.5px) rotate(0deg)`;

    // image11: sakura and flowers
    const translate_11 = 100 - (1500 * disX / maxWidth);
    images[11].style.transform = `scale(1) translate(${translate_11}px, 0px) rotate(0deg)`;

    // image12: 2233 picnic
    const translate_12 = 216 - (1486 * disX / maxWidth);
    const opacity_12 = (translate_12 > -1087) ? ((translate_12 + 1087) / 1303) : (0.2 * (translate_12 + 1087) / -183);
    images[12].style.transform = `scale(1) translate(${translate_12}px, 13.5px) rotate(0deg)`;
    images[12].style.opacity = `${opacity_12}`;

    // image13: tree branches
    const translate_13 = 2100 - (2100 * disX / maxWidth);
    images[13].style.transform = `scale(1) translate(${translate_13}px, 0px) rotate(0deg)`;
    images[13].style.filter = `blur(2px)`;

    // image14: front sakura
    const translate_14 = -1000 - (3000 * disX / maxWidth);
    images[14].style.transform = `scale(1) translate(${translate_14}px, 0px) rotate(0deg)`;
    images[14].style.filter = `blur(1px)`;
}

function mouseLeaveHandler(e) {
    if (e.clientX <= 0 || e.clientY <= 0 || e.clientX >= maxWidth || e.clientY >= maxHeight) {

        images.forEach(item => {
            item.style.transition = 'all 0.5s';
        });

        // image0: background hills
        images[0].style.transform = `scale(1) translate(0px, -15px) rotate(0deg)`;

        // image1: hills and boats
        images[1].style.transform = `scale(1) translate(1100px, 0px) rotate(0deg)`;

        // image2: trees and boats
        images[2].style.transform = `scale(1) translate(675px, -5px) rotate(0deg)`;

        // image3: bridge
        images[3].style.transform = `scale(1) translate(-637px, 0px) rotate(0deg)`;

        // image4: boats
        images[4].style.transform = `scale(1) translate(607.5px, 45px) rotate(0deg)`;

        // image5: 2233 boat
        images[5].style.transform = `scale(1) translate(252px, 36.4px) rotate(0deg)`;
        images[5].style.opacity = `0`;

        // image6: sakura
        images[6].style.transform = `scale(1) translate(112px, 21px) rotate(0deg)`;

        // image7: family
        images[7].style.transform = `scale(1) translate(-350px, 49px) rotate(0deg)`;

        // image8: 22 kite
        images[8].style.transform = `scale(1) translate(-240px, 16px) rotate(0deg)`;
        images[8].style.opacity = `0`;

        // image9: 33
        images[9].style.transform = `scale(1) translate(-340px, 32px) rotate(0deg)`;
        images[9].style.opacity = `0`;

        // image10: two sakuras
        images[10].style.transform = `scale(1) translate(-90px, 13.5px) rotate(0deg)`;

        // image11: sakura and flowers
        images[11].style.transform = `scale(1) translate(100px, 0px) rotate(0deg)`;

        // image12: 2233 picnic
        images[12].style.transform = `scale(1) translate(216px, 13.5px) rotate(0deg)`;
        images[12].style.opacity = `1`;

        // image13: tree branches
        images[13].style.transform = `scale(1) translate(2100px, 0px) rotate(0deg)`;
        images[13].style.filter = `blur(2px)`;

        // image14: front sakura
        images[14].style.transform = `scale(1) translate(-1000px, 0px) rotate(0deg)`;
        images[14].style.filter = `blur(1px)`;
    }
}