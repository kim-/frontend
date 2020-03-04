interface PickingDetail{
    hid: number,
    id: number,
    zoneCode: string,
    binCode: string,
    skuId: number,
    sku:string,
    barcode: string,
    carton: string,
    qty: number,
    isPicked: false,
    isSorted: false,
    isIgnore: false,
    shouldPickBy: string,
    sortBy: string,
    sortCarton: string,
    createdBy: string,
    createdTime: Date,
    lastModifiedBy: string,
    lastModifiedTime: Date,
}