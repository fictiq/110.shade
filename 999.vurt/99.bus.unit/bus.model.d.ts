import Bus from "./fce/Bus.interface";
export declare class BusModel implements Bus {
    MQTT: any;
    actList: any;
    client: any;
    host: string;
    bus: Function;
    responseSuffix: string;
    promises: any;
}
