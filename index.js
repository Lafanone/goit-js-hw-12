import{a as y,S as g,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const b="https://pixabay.com/api/",v="53374557-3f57f89b9c540f2869ff2907f",L=15;async function w(e,t=1){const r={key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:L};try{return(await y.get(b,{params:r})).data}catch{throw new Error("Failed to fetch images from Pixabay.")}}let P=new g(".gallery a",{captionsData:"alt",captionDelay:250});const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more-btn");function S(e){const t=e.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span class="info-item-value">${r.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span class="info-item-value">${r.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span class="info-item-value">${r.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span class="info-item-value">${r.downloads}</span>
          </div>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",t),P.refresh()}function c(){u.innerHTML=""}function E(){f.classList.remove("is-hidden")}function q(){f.classList.add("is-hidden")}function B(){m.classList.remove("is-hidden")}function h(){m.classList.add("is-hidden")}let p="",i=1;const M=15,d=document.querySelector(".form"),R=document.querySelector(".load-more-btn"),$=document.querySelector(".gallery");async function x(){E();try{const e=await w(p,i),t=e.hits,r=e.totalHits,n=Math.ceil(r/M);if(t.length===0&&i===1){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}S(t),i>1&&I(),i<n?B():(a.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:5e3}),h())}catch(e){console.error(e),a.error({message:"Something went wrong! Please try again later.",position:"topRight"}),c()}finally{q()}}d.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements["search-text"].value.trim();if(!t){a.warning({message:"Please enter a search query!",position:"topRight"});return}p=t,i=1,c(),h(),x(),d.reset()});R.addEventListener("click",()=>{i+=1});function I(){const e=$.firstElementChild;if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
