import {Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = [
    {
      name: "Петропавловское молоко 2.5% 900 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/heb/46709567422494/moloko-petropavlovskoe-2-5-0-9l-tba-101048481-1-Container.jpg",
      description: "Молоко вкусное, беру часто.",
      realPage: "https://kaspi.kz/shop/p/petropavlovskoe-moloko-2-5-900-ml-101048481/?c=750000000#!/item",
      raiting: 1,
      imgGalery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/heb/46709567422494/moloko-petropavlovskoe-2-5-0-9l-tba-101048481-1-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h78/hd0/46709567651870/moloko-petropavlovskoe-2-5-0-9l-tba-101048481-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h0a/46709567881246/moloko-petropavlovskoe-2-5-0-9l-tba-101048481-3.jpg"]
    },
    {
      name: "Lactel молоко 2.5% 1000 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h5b/46879409569822/foodmaster-lactel-ultrapasterizovannoe-2-5-1-l-100223139-1-Container.jpg",
      description: "Молоко питьевое, ультрапастеризованное, изготовлено из натурального коровьего молока, удобная упаковка и современные технологии позволяют употреблять такое молоко без предварительной обработки. Полезный и нужный продукт на каждый день!",
      realPage: "https://kaspi.kz/shop/p/lactel-moloko-2-5-1000-ml-100223139/?c=750000000#!/item",
      raiting: 1,
      imgGalery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h5b/46879409569822/foodmaster-lactel-ultrapasterizovannoe-2-5-1-l-100223139-1-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/h22/46879409799198/foodmaster-lactel-ultrapasterizovannoe-2-5-1-l-100223139-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7d/hed/46879410028574/foodmaster-lactel-ultrapasterizovannoe-2-5-1-l-100223139-3.jpg"
      ]
    },
    {
      name: "МОЁ молоко 2.5% 950 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h3d/49729183809566/moloko-moe-2-5-0-95l-kbl-101080898-1-Container.jpg",
      description: "Ультрапастеризованное молоко Моё — это натуральный продукт, изготовленный по современным технологиям, не содержит болезнетворных бактерий, сохраняет все полезные вещества, витамины и микроэлементы. Такое молоко имеет замечательный вкус, его не нужно кипятить, рекомендуется для повседневного применения.",
      realPage: "https://kaspi.kz/shop/p/petropavlovskoe-moloko-2-5-900-ml-101048481/?c=750000000#!/item",
      raiting: 1.2,
    },
    {
      name: "Adal молоко 3.2% 925 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h43/65753894682654/adal-moloko-3-2-925-ml-100982670-1.jpg",
      description: "Действительно натуральное молоко, вкус детства!",
      realPage: "https://kaspi.kz/shop/p/adal-moloko-3-2-925-ml-100982670/?c=750000000#!/item",
      raiting: 2,
    },

    {
      name: "Домик в деревне сливки 10% 470 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h8e/46721513357342/domik-v-derevne-10-470-ml-100230998-1-Container.jpg",
      description: "Вкусные к чаю и к кофе.Молоко вкусное, беру часто.",
      realPage: "https://kaspi.kz/shop/p/domik-v-derevne-slivki-10-470-ml-100230998/?c=750000000#!/item",
      raiting: 3,
    },
    {
      name: "Буренкино молоко 2.5% 1950 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hf0/32520390967326/burenkino-ultrapasterizovannoe-2-5-1-95-l-100223125-1-Container.jpg",
      description: "Жақсы сүт, бағасы да жақсы. Басқа сүттерге қарағанда арзан. Сапасы да жақсы.",
      realPage: "https://kaspi.kz/shop/p/burenkino-moloko-2-5-1950-ml-100223125/?c=750000000#!/item",
      raiting: 3.3,
    },
    {
      name: "Петропавловское молоко 2.5% 900 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/heb/46709567422494/moloko-petropavlovskoe-2-5-0-9l-tba-101048481-1-Container.jpg",
      description: "Молоко вкусное, беру часто.",
      realPage: "https://kaspi.kz/shop/p/petropavlovskoe-moloko-2-5-900-ml-101048481/?c=750000000#!/item",
      raiting: 1,
    },
    {
      name: "Петропавловское молоко 2.5% 900 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/heb/46709567422494/moloko-petropavlovskoe-2-5-0-9l-tba-101048481-1-Container.jpg",
      description: "Молоко вкусное, беру часто.",
      realPage: "https://kaspi.kz/shop/p/petropavlovskoe-moloko-2-5-900-ml-101048481/?c=750000000#!/item",
      raiting: 1,

    },
    {
      name: "Петропавловское молоко 2.5% 900 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/heb/46709567422494/moloko-petropavlovskoe-2-5-0-9l-tba-101048481-1-Container.jpg",
      description: "Молоко вкусное, беру часто.",
      realPage: "https://kaspi.kz/shop/p/petropavlovskoe-moloko-2-5-900-ml-101048481/?c=750000000#!/item",
      raiting: 1,

    },
    {
      name: "Петропавловское молоко 2.5% 900 мл",
      img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/heb/46709567422494/moloko-petropavlovskoe-2-5-0-9l-tba-101048481-1-Container.jpg",
      description: "Молоко вкусное, беру часто.",
      realPage: "https://kaspi.kz/shop/p/petropavlovskoe-moloko-2-5-900-ml-101048481/?c=750000000#!/item",
      raiting: 1,
    }

  ]

  constructor() {
  }

  goToRealPage(product: any) {
    document.location.href = product.realPage;
  }

  shareWithTelegram(product: any) {
    document.location.href = "https://t.me/share/url?url=" + product.realPage
  }

  changeCurrentImage(product: any, image: string) {
    product.img = image
  }
}
