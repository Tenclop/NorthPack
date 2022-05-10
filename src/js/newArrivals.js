import data from "./data.js";
const { products } = data;
const newArrivals = `       <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide" data-id=${products[7]._id}>
              <img
                src=${products[7].image}
                alt=""
              />
              <h3 class="swiper-slide_addToCart" id="addToCart"> Add To Cart </h3>
              <h3>${products[7].name}</h3>
              <h3>${products[7].price}</h3>
            </div>

            <div class="swiper-slide" data-id=${products[10]._id}>
              <img
                src=${products[10].image}
                alt=""
              />
              <h3 class="swiper-slide_addToCart" id="addToCart"> Add To Cart </h3>
              <h3>${products[10].name}</h3>
              <h3>${products[10].salePrice}&nbsp ${products[10].price}</h3>

            </div>

            <div class="swiper-slide" data-id=${products[1]._id}>
              <img src=${products[1].image} alt="" />
              <h3 class="swiper-slide_addToCart" id="addToCart"> Add To Cart </h3>
              <h3>${products[1].name}</h3>
              <h3>${products[1].price}</h3>
            </div>
            <div class="swiper-slide" data-id=${products[6]._id}>
              <img
                src=${products[6].image}
                alt=""
              />
              <h3 class="swiper-slide_addToCart" id="addToCart"> Add To Cart </h3>
              <h3>${products[6].name}</h3>
              <h3>${products[6].salePrice}&nbsp ${products[6].price}</h3>
            </div>

            <div class="swiper-slide" data-id=${products[9]._id}>
              <img
                src=${products[9].image}
                alt=""
              />
              <h3 class="swiper-slide_addToCart" id="addToCart"> Add To Cart </h3>
              <h3>${products[9].name}</h3>
              <h3>${products[9].price}</h3>
            </div>

            <div class="swiper-slide" data-id=${products[0]._id}>
              <img src=${products[0].image}/>
              <h3 class="swiper-slide_addToCart" id="addToCart"> Add To Cart </h3>
              <h3>${products[0].name}</h3>
              <h3>${products[0].salePrice}&nbsp ${products[0].price}</h3>
            </div>
          </div>
          <!-- If we need pagination -->
          <!-- <div class="swiper-pagination"></div> -->

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev swiper-button"></div>
          <div class="swiper-button-next swiper-button"></div>

          <!-- If we need scrollbar -->
          <!-- <div class="swiper-scrollbar"></div> -->
        </div>`;
export default newArrivals;
