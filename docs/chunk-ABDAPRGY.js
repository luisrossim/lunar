import{A as _,B as P,G as j,I as E,J as T,K as C,L as D,M as V,N as A,O as H,P as z,b as k,c as d,d as y,e as g,f,h as q,j as r,k as l,m as u,n as h,o as x,p as o,q as a,r as p,s as O,t as I,u as m,v as w,w as M,z as S}from"./chunk-3P7FWTUG.js";var b=(()=>{let e=class e{constructor(t){this.http=t,this.urlInit="https://www.omdbapi.com/?apikey=e8db2703&s=The+Walking+Dead",this.urlByID="https://www.omdbapi.com/?apikey=e8db2703&i="}getInitMovies(){return this.http.get(this.urlInit)}getMovieById(t){return this.http.get(`${this.urlByID}${t}`)}};e.\u0275fac=function(n){return new(n||e)(y(P))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Q=()=>({background:"#ababab10"});function Z(i,e){i&1&&(o(0,"div",8)(1,"div",5)(2,"div",9),p(3,"p-skeleton",7),a()()()),i&2&&(r(3),h(M(2,Q)))}function Y(i,e){if(i&1&&(o(0,"div",18)(1,"div",19)(2,"div",20)(3,"a",21),p(4,"img",22),a()(),o(5,"div",23)(6,"small"),m(7),a()()()()),i&2){let c=e.$implicit;r(3),u("routerLink","movie/"+c.imdbID),r(1),I("src",c.Poster,q),r(3),w(c.Title)}}function $(i,e){if(i&1&&(o(0,"div")(1,"div",10)(2,"div",8)(3,"div",11)(4,"div",12)(5,"div",13)(6,"p",14),m(7," lunar home works"),p(8,"i",15),a()(),o(9,"p-carousel",16),x(10,Y,8,3,"ng-template",17),a()()()()()()),i&2){let c=O();r(9),u("value",c.initMovies)("numVisible",6)("numScroll",6)("circular",!1)("responsiveOptions",c.responsiveOptions)}}function G(i,e){i&1&&(o(0,"div",24)(1,"p",25),m(2," Erro ao buscar filmes ou lista vazia! "),a()())}var B=(()=>{let e=class e{constructor(t){this.movieService=t,this.initMovies=[],this.loading=!0}ngOnInit(){this.fetchInitMovies(),this.responsiveSlide(),setTimeout(()=>{this.loading=!1},700)}fetchInitMovies(){this.movieService.getInitMovies().subscribe({next:t=>{this.initMovies=t.Search},error:t=>{console.log(t)}})}responsiveSlide(){this.responsiveOptions=[{breakpoint:"1900px",numVisible:6,numScroll:6},{breakpoint:"1600px",numVisible:5,numScroll:5},{breakpoint:"1450px",numVisible:4,numScroll:4},{breakpoint:"1230px",numVisible:3,numScroll:3},{breakpoint:"1050px",numVisible:2,numScroll:2},{breakpoint:"868px",numVisible:1,numScroll:1}]}};e.\u0275fac=function(n){return new(n||e)(l(b))},e.\u0275cmp=g({type:e,selectors:[["app-home"]],decls:8,vars:6,consts:[["class","container-xxl page-container",4,"ngIf"],[4,"ngIf"],["style","margin-top: 7rem;",4,"ngIf"],[1,"bg-dark"],[1,"container-xxl","section-container"],[1,"pb-5","pt-5"],[1,"d-flex","flex-column","align-items-center"],["width","85vw","height","40vh"],[1,"container-xxl","page-container"],[1,"d-flex","flex-column","align-items-center","pt-5"],["pAnimateOnScroll","","enterClass","fadein","leaveClass","fadeout",1,"img-bg-1","animation-duration-1000","animation-ease-in-out"],[1,"pt-5","pb-5"],["pAnimateOnScroll","","enterClass","scalein","leaveClass","fadeout",1,"glass-effect-3","rounded-4","animation-duration-1000","animation-ease-in-out"],[1,"ani-center","text-animation"],[1,"line","typing-animation","mb-0","mt-5"],[1,"bi","bi-stars","ms-2"],[3,"value","numVisible","numScroll","circular","responsiveOptions"],["pTemplate","item"],[1,"banner"],["pAnimateOnScroll","","enterClass","flipright","leaveClass","fadeout",1,"min-card","d-flex","flex-column","text-center","animation-duration-1000","animation-ease-in-out"],[1,"box-img"],[3,"routerLink"],[3,"src"],[1,"desc"],[2,"margin-top","7rem"],[1,"text-center","text-bg-danger","p-2"]],template:function(n,s){n&1&&(x(0,Z,4,3,"div",0)(1,$,11,5,"div",1)(2,G,3,0,"div",2),o(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),p(7,"p-skeleton",7),a()()()()),n&2&&(u("ngIf",s.loading),r(1),u("ngIf",s.initMovies.length>0&&!s.loading),r(1),u("ngIf",s.initMovies.length==0),r(5),h(M(5,Q)))},dependencies:[S,D,A,V,H,T],styles:['.text-animation[_ngcontent-%COMP%]{margin:0;padding:0;display:inline-block;box-sizing:border-box}.ani-center[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:1rem}.line[_ngcontent-%COMP%]{box-sizing:border-box;border-right:2px solid rgba(0,0,0,.75);white-space:nowrap;overflow:hidden}.typing-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinkCursor .5s steps(40) infinite normal,typing 3s steps(40) 1s normal both}.card[_ngcontent-%COMP%]{border:none}.min-card[_ngcontent-%COMP%]{width:160px}.min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:160px;height:230px;margin:1.2rem 0rem 1rem;border-radius:.7rem;background-size:cover;transition:all .3s}.box-img[_ngcontent-%COMP%]{border-radius:.7rem;position:relative}.box-img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{cursor:pointer;transform:scale(1.1)}.banner[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.desc[_ngcontent-%COMP%]{word-wrap:break-word;overflow-wrap:break-word}.img-section[_ngcontent-%COMP%]{height:300px;background-image:url("./media/bg-4-52WVLPZ7.jpg");background-repeat:no-repeat;background-size:cover;background-position:center;transition:all .5s}.img-section-2[_ngcontent-%COMP%]{height:300px;background-image:url("./media/ExfHZEnXMAYGOQn-BYTVDLZQ.jpg");background-repeat:no-repeat;background-size:cover;background-position:top center;transition:all .5s}.img-bg-1[_ngcontent-%COMP%]{background-image:url("./media/ExfHZEnXMAYGOQn-BYTVDLZQ.jpg");background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position:left center;transition:all .5s}@keyframes _ngcontent-%COMP%_typing{0%{width:0}to{width:9.4em}}@keyframes _ngcontent-%COMP%_blinkCursor{0%{border-right-color:#ffffffbf}to{border-right-color:transparent}}@media (max-width: 768px){.container-xxl[_ngcontent-%COMP%]{padding:0rem 1rem!important}.card[_ngcontent-%COMP%]{background-color:transparent}.img-bg-1[_ngcontent-%COMP%]{background-position:20%;background-attachment:scroll}}@media (max-width: 425px){.page-container[_ngcontent-%COMP%]{margin:7rem 0rem 0rem}}@media (max-width: 380px){.min-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:130px;height:200px}}']});let i=e;return i})();var L=(()=>{let e=class e{constructor(t,n,s){this.movieService=t,this.route=n,this.router=s,this.movie={}}ngOnInit(){let t=this.route.snapshot.paramMap.get("imdbID");this.fetchMovie(t)}fetchMovie(t){this.movieService.getMovieById(t).subscribe({next:n=>{this.movie=n},error:n=>{console.log(n),this.router.navigateByUrl("")}})}};e.\u0275fac=function(n){return new(n||e)(l(b),l(j),l(E))},e.\u0275cmp=g({type:e,selectors:[["app-movie-list"]],decls:5,vars:0,consts:[[1,"page-container"]],template:function(n,s){n&1&&(o(0,"div",0)(1,"p"),m(2,"movie-list works!"),a(),o(3,"p"),m(4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis, nam blanditiis mollitia vitae incidunt non distinctio, neque commodi nemo, quaerat aspernatur vel earum fugit illo! Autem obcaecati at delectus, maiores ullam minus quisquam labore qui impedit unde harum quod, facilis deserunt, dignissimos accusantium nulla itaque error in temporibus repudiandae vero reiciendis culpa enim? Ipsum provident dolores odit! Similique debitis iure consequuntur? Architecto perspiciatis a, est fuga aut blanditiis, maiores id libero alias dignissimos sapiente quos aspernatur, sunt voluptate aliquid consequuntur dolores delectus minima vel cupiditate officia non iure. Enim, sed nesciunt aut obcaecati distinctio iusto voluptates pariatur quaerat maiores ex tenetur explicabo repellendus fuga deleniti! Rerum ratione omnis quae, consequatur amet provident vel atque optio veniam tempore adipisci asperiores voluptatibus! Quaerat odit dolorum tempore animi aspernatur cumque officiis quod voluptatem beatae ipsam. Vitae, eligendi, odio et sapiente, animi distinctio a cum laborum explicabo rem saepe deleniti eum tempore quaerat. Repellendus cumque molestias quaerat illo quae laborum consectetur omnis deserunt ipsum at dolor, corrupti amet assumenda nulla minima. Minima, excepturi officia, ad obcaecati inventore vero beatae nihil ex ratione quidem dicta quis fugiat ducimus distinctio pariatur recusandae ut ipsum repellat fuga enim nobis hic optio illo? Fuga aliquam consequuntur enim ipsam quibusdam ad maiores ratione. Excepturi odio molestias necessitatibus unde qui aliquid iure, est porro dolores quidem. Saepe aliquam doloribus hic delectus tenetur itaque ut, eum cumque, rerum ad placeat expedita? Magnam est quia ullam! Accusantium laborum nobis possimus quam vitae vero suscipit enim reiciendis doloribus molestias! Quos animi hic voluptatibus natus necessitatibus iste, autem explicabo, eveniet voluptas ratione et, repellat earum tenetur! Molestias laudantium autem sint suscipit soluta sit, impedit dolores odit necessitatibus. Nihil odit aliquam eius a quis enim voluptatum at ipsam assumenda, molestiae rem dolor cumque omnis aspernatur cum iure ea mollitia velit. Quam atque ea molestias!"),a()())}});let i=e;return i})();var U=[{path:"",component:B},{path:"movie/:imdbID",component:L}],N=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[C.forChild(U),C]});let i=e;return i})();var fe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=f({type:e}),e.\u0275inj=d({imports:[_,z,N]});let i=e;return i})();export{fe as MovieModule};
