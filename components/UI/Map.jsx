"use client"
import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader";
const Map=() => {
    const mapRef=useRef(null);

    useEffect(() => {
        const initMap=async () => {
            const loader=new Loader({
                apiKey: process.env.GOOGLEMAP_API,
                version: 'quartely',
            })

            const { Map }=await loader.importLibrary('maps');

            const locationInMap={
                lat: 39.0427654,
                lng: -76.9871504
            };

            // MARKER
            const { Marker }=(await loader.importLibrary(
                'marker'
            ));

            const options={
                center: locationInMap,
                zoom: 15,
                mapId: 'NEXT_MAPS_TUTS',
            };

            const map=new Map(mapRef.current, options);

            // add the marker in the map
            const marker=new Marker({
                map: map,
                position: locationInMap,
            });

        }

        initMap();
    }, []);

    return (
        <div className="max-w-[480px] h-[380px]" ref={mapRef}>
        </div>
    )
}

export default Map




