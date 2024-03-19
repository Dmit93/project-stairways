//import { data } from '/data_map.json';
if (document.querySelector('#map') && ymaps != undefined) {
    ymaps.ready(init);

    function init() {
        // var customBalloonContentLayout = ymaps.templateLayoutFactory.createClass([
        //     '<ul class=list>',
        //     // Выводим в цикле список всех геообъектов.
        //     '{% for geoObject in properties.geoObjects %}',
        //     '<li><a href=# data-placemarkid="{{ geoObject.properties.placemarkId }}" class="list_item">{{ geoObject.properties.length }}</a></li>',
        //     '{% endfor %}',
        //     '</ul>'
        // ].join(''));
        let myMap = new ymaps.Map('map', {
                center: [55.76, 37.64],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            }),
            objectManager = new ymaps.ObjectManager({
                // Чтобы метки начали кластеризоваться, выставляем опцию.
                clusterize: true,
                // ObjectManager принимает те же опции, что и кластеризатор.
                gridSize: 32,
                hasBalloon: true,
                hasHint: true,
                clusterDisableClickZoom: true,
                clusterOpenBalloonOnClick: true,
                // Устанавливаем режим открытия балуна. 
                // В данном примере балун никогда не будет открываться в режиме панели.
                clusterBalloonPanelMaxMapArea: 0,
                // По умолчанию опции балуна balloonMaxWidth и balloonMaxHeight не установлены для кластеризатора,
                // так как все стандартные макеты имеют определенные размеры.
                clusterBalloonMaxHeight: 200,
                iconContentLayout: 'cluster#blueGovernmentCircleIcon',
                // clusterIconLayout: customBalloonContentLayout,
            });


        // Чтобы задать опции одиночным объектам и кластерам,
        // обратимся к дочерним коллекциям ObjectManager.

        // var clusterer = new ymaps.Clusterer({
        //     // Зададим макет метки кластера.
        //     clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="clusterIcon">{{ properties.geoObjects.length }}</div>'),
        //     // Чтобы метка была кликабельной, переопределим ее активную область.
        //     clusterIconShape: {
        //         type: 'Rectangle',
        //         coordinates: [[0, 0], [20, 20]]
        //     }
        // });
        // var customItemContentLayout = ymaps.templateLayoutFactory.createClass(
        //     // Флаг "raw" означает, что данные вставляют "как есть" без экранирования html.
        //     '<h2 class=ballon_header>{{ properties.balloonContentHeader|raw }}</h2>' +
        //     '<div class=ballon_body>{{ properties.balloonContentBody|raw }}</div>' +
        //     '<div class=ballon_footer>{{ properties.balloonContentFooter|raw }}</div>'
        // );
        // var customPlacemarkLayout = ymaps.templateLayoutFactory.createClass(
        //     '<div class=placemark_layout_container>{{ properties.cost }}</div>'
        // );
        // // Создаем собственный макет с информацией о выбранном геообъекте.
        // var customBalloonContentLayout = ymaps.templateLayoutFactory.createClass([
        //     '<h2 class=ballon_header>{{ properties.rooms }}</h2>'
        // ].join(''));



        objectManager.events.add('click', function(e) {
            var clustererPlacemark = e.get('target');
            // var overlay = clustererPlacemark.getOverlaySync();
            // var layout = overlay.getLayoutSync();
            // var element = layout.getParentElement();
            //  doWhateverYouWant(element);
            console.log(clustererPlacemark)
        });

        objectManager.objects.options.set('preset', 'islands#blueDotIconWithCaption');

        objectManager.clusters.options.set({
            preset: 'islands#blueDotIconWithCaption',
            iconCaption: 'Подпись метки',
            //  clusterIcons: clusterIcons,
            // iconLayout: customPlacemarkLayout,
            // balloonContentLayout: customBalloonContentLayout,
            // clusterIconContentLayout: customItemContentLayout,
            // hintContentLayout: ymaps.templateLayoutFactory.createClass('Группа объектов')
        });
        myMap.geoObjects.add(objectManager);

        // fetch('/data_map.json')
            // .then(response => response.json())
            // .then(result => {
            //     objectManager.add(result)
            // });

    }

}