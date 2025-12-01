import{a as g,S as b,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const v="https://pixabay.com/api/",L="53374557-3f57f89b9c540f2869ff2907f",w=15;async function P(e,t=1){const r={key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:w};try{return(await g.get(v,{params:r})).data}catch{throw new Error("Failed to fetch images from Pixabay.")}}let S=new b(".gallery a",{captionsData:"alt",captionDelay:250});const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more-btn");function E(e){const t=e.map(r=>`
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
      </li>`).join("");f.insertAdjacentHTML("beforeend",t),S.refresh()}function c(){f.innerHTML=""}function q(){m.classList.remove("is-hidden")}function B(){m.classList.add("is-hidden")}function M(){h.classList.remove("is-hidden")}function d(){h.classList.add("is-hidden")}let p="",i=1;const R=15,u=document.querySelector(".form"),$=document.querySelector(".load-more-btn"),x=document.querySelector(".gallery");async function y(){q(),d();try{const e=await P(p,i),t=e.hits,r=e.totalHits,n=Math.ceil(r/R);if(t.length===0&&i===1){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}E(t),i>1&&I(),i<n?M():(a.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter",timeout:5e3}),d())}catch(e){console.error(e),a.error({message:"Something went wrong! Please try again later.",position:"topRight"}),c()}finally{B()}}u.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements["search-text"].value.trim();if(!t){a.warning({message:"Please enter a search query!",position:"topRight"});return}p=t,i=1,c(),d(),y(),u.reset()});$.addEventListener("click",()=>{i+=1,y()});function I(){const e=x.firstElementChild;if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
