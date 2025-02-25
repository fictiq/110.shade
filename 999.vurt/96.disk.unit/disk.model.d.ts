import Disk from "./fce/Disk.interface";
export declare class DiskModel implements Disk {
    local: number;
    imageSrc: string;
    hexgridSrc: string;
    promoInit: Promise<any>;
    promoOpen: Promise<any>;
    storeWork: any;
    storeHexmap: any;
}
