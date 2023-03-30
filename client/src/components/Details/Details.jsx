import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { oneProducts } from "../../redux/action/index";
import "./Details.css"
import Carousel from 'react-bootstrap/Carousel';




export default function Details() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const oneProduct = useSelector(state => state.productDetail);

  useEffect(() => {
    dispatch(oneProducts(productId))
  }, [dispatch, productId]);
  console.log(oneProduct);


  return (
    <div>
      <div class="bg-white">
        <div class="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div class="flex items-center">
                  <a href="/" class="mr-2 text-sm font-medium text-gray-900">
                    Men
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li>
                <div class="flex items-center">
                  <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                    Clothing
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li class="text-sm">
                <a
                  href="/"
                  aria-current="page"
                  class="font-medium text-gray-500 hover:text-gray-600"
                >
                  Basic Tee 6-Pack
                </a>
              </li>
            </ol>
          </nav>

          <div className="carrusel">
          <img
            className="d-block w-100"
            src={oneProduct.imageSrc}
            alt={oneProduct.imageAlt}
           
          />
 
    </div>
          <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
               Desciption
              </h1>
            </div>

            <div class="mt-4 lg:row-span-3 lg:mt-0">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl tracking-tight text-gray-900">{oneProduct.price}</p>

              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      class="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <svg
                      class="text-gray-200 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="sr-only">4 out of 5 stars</p>
                  <a
                    href="/"
                    class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    117 reviews
                  </a>
                </div>
              </div>

              <form class="mt-10">
                <div>

                  <fieldset class="mt-4">
                    <legend class="sr-only">Choose a color</legend>
                    
                  </fieldset>
                </div>
                <div class="mt-10">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Choose a size</legend>
                    <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XXS"
                          disabled
                          class="sr-only"
                          aria-labelledby="size-choice-0-label"
                        />
                        <span id="size-choice-0-label">XXS</span>
                        <span
                          aria-hidden="true"
                          class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1="0"
                              y1="100"
                              x2="100"
                              y2="0"
                              vector-effect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      </label>

                      <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XS"
                          class="sr-only"
                          aria-labelledby="size-choice-1-label"
                        />
                        <span id="size-choice-1-label">XS</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="S"
                          class="sr-only"
                          aria-labelledby="size-choice-2-label"
                        />
                        <span id="size-choice-2-label">S</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="M"
                          class="sr-only"
                          aria-labelledby="size-choice-3-label"
                        />
                        <span id="size-choice-3-label">M</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="L"
                          class="sr-only"
                          aria-labelledby="size-choice-4-label"
                        />
                        <span id="size-choice-4-label">L</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XL"
                          class="sr-only"
                          aria-labelledby="size-choice-5-label"
                        />
                        <span id="size-choice-5-label">XL</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="2XL"
                          class="sr-only"
                          aria-labelledby="size-choice-6-label"
                        />
                        <span id="size-choice-6-label">2XL</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>

                      <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="3XL"
                          class="sr-only"
                          aria-labelledby="size-choice-7-label"
                        />
                        <span id="size-choice-7-label">3XL</span>

                        <span
                          class="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">
                   {oneProduct.description}
                  </p>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

                <div class="mt-4">
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">      
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                       {oneProduct.highlights}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
