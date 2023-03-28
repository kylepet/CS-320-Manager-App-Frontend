let width = window.innerWidth;
let height = window.innerHeight;
let title_box_width = Math.floor(width * 3 / 5);
let title_box_height = Math.floor(height / 10);
let field_text_size = Math.floor(height * 5 / 100);

let title = document.querySelector(":root");

title.style.setProperty("--width", title_box_width);
title.style.setProperty("--height", title_box_height);
title.style.setProperty("--left", Math.floor(width / 5));
title.style.setProperty("--top", Math.floor(height / 10));
title.style.setProperty("--font-size", title_box_height / 2);
title.style.setProperty("--padding-top", Math.floor( title_box_height / 3));
title.style.setProperty("--fname-lbox", Math.floor(width / 20));
title.style.setProperty("--fname-tbox", Math.floor(height / 3));
title.style.setProperty("--field-box-height", Math.floor(height * 6 / 100));
title.style.setProperty("--field-text-size", field_text_size);
title.style.setProperty("--side-padding", field_text_size / 2);
title.style.setProperty("--top-bottom-padding", field_text_size / 4)
title.style.setProperty("--fname-ilbox", Math.floor(width / 20));
title.style.setProperty("--fname-itbox", Math.floor(height / 3) + Math.floor(height * 6 / 100) + Math.floor(height / 100) * 3);
title.style.setProperty("--ibox-height", Math.floor(height * 6 / 100));
title.style.setProperty("--ibox-width", Math.floor(width * 3 / 10));
title.style.setProperty("--lname-lbox", Math.floor(width / 20));
title.style.setProperty("--lname-tbox", Math.floor(height / 3) + 3 * Math.floor(height * 6 / 100) + Math.floor(height / 100) * 3);
title.style.setProperty("--lname-itbox", Math.floor(height / 3) + 4 * Math.floor(height * 6 / 100) + 2 * Math.floor(height / 100) * 3);
title.style.setProperty("--email-lbox", Math.floor(width / 2));
title.style.setProperty("--email-tbox", Math.floor(height / 3));
title.style.setProperty("--email-ilbox", Math.floor(width / 2));
title.style.setProperty("--email-itbox", Math.floor(height / 3) + Math.floor(height * 6 / 100) + Math.floor(height / 100) * 3);
title.style.setProperty("--YoG-lbox", Math.floor(width / 2));
title.style.setProperty("--YoG-tbox", Math.floor(height / 3) + 3 * Math.floor(height * 6 / 100) + Math.floor(height / 100) * 3);
title.style.setProperty("--YoG-ilbox", Math.floor(width / 2));
title.style.setProperty("--YoG-itbox", Math.floor(height / 3) + 4 * Math.floor(height * 6 / 100) + 2 * Math.floor(height / 100) * 3);
title.style.setProperty("--submit-tpos", Math.floor(height * 8 / 10));
title.style.setProperty("--submit-height", Math.floor(height / 10));

