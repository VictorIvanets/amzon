(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=[{logo:"src/img/photo_2025-05-14_09-00-06 (5).jpg",text:"Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",photo:"src/img/photo_2025-05-14_09-00-06.jpg",name:"Ethan Morgan",title:"Founder and CEO, Serene Living Products"},{logo:"src/img/photo_2025-05-14_09-00-06 (6).jpg",text:"Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",photo:"src/img/photo_2025-05-14_09-00-06 (3).jpg",name:"Olivia Haye",title:"Owner, Starlight Creations"},{logo:"src/img/photo_2025-05-14_09-00-06 (4).jpg",text:"Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",photo:"src/img/photo_2025-06-08_08-35-34.jpg",name:"Alexander Reed",title:"Co-Founder, Opulent Living Group"},{logo:"src/img/photo_2025-05-14_09-00-06 (5).jpg",text:"Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",photo:"src/img/photo_2025-05-14_09-00-06.jpg",name:"Ethan Morgan",title:"Founder and CEO, Serene Living Products"},{logo:"src/img/photo_2025-05-14_09-00-06 (6).jpg",text:"Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",photo:"src/img/photo_2025-05-14_09-00-06 (3).jpg",name:"Olivia Haye",title:"Owner, Starlight Creations"},{logo:"src/img/photo_2025-05-14_09-00-06 (4).jpg",text:"Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",photo:"src/img/photo_2025-06-08_08-35-34.jpg",name:"Alexander Reed",title:"Co-Founder, Opulent Living Group"}];function u(){const o=document.querySelector(".sliderbox");o.innerHTML="";const s=d.map(r=>`
    <div class="sliderbox__item">
      <div class="sliderbox__item__logobox">
        <img src="${r.logo}" alt="Logo" />
      </div>
      <div class="sliderbox__item__reviewsbox">
        <h3 class="sliderbox__item__reviewsbox__review">
          ${r.text}
        </h3>
        <h3 class="sliderbox__item__reviewsbox__after">“</h3>
      </div>
      <div class="sliderbox__item__autorbox">
        <div class="sliderbox__item__wrapper">
          <div class="sliderbox__item__wrapper__photo">
            <img src="${r.photo}" alt="${r.name}" />
          </div>
          <h3 class="sliderbox__item__wrapper__info">
            ${r.name} <br />
            <span>${r.title}</span>
          </h3>
        </div>
      </div>
    </div>
  `);o.insertAdjacentHTML("beforeend",s.join(""))}document.addEventListener("DOMContentLoaded",()=>{u();const o=document.querySelector(".sliderbox"),s=document.querySelector(".arrow__left"),r=document.querySelector(".arrow__right"),n=document.getElementById("prew"),e=document.getElementById("next"),t=()=>{const i=o.querySelector(".sliderbox__item");if(!i)return 0;const a=window.getComputedStyle(i),l=i.offsetWidth,c=parseFloat(a.marginRight)||0;return l+c-1};r.addEventListener("click",()=>{o.scrollBy({left:t(),behavior:"smooth"})}),s.addEventListener("click",()=>{o.scrollBy({left:-t(),behavior:"smooth"})}),n.addEventListener("click",()=>{o.scrollTo({left:0,behavior:"smooth"})}),e.addEventListener("click",()=>{o.scrollTo({left:o.scrollWidth,behavior:"smooth"})})});
