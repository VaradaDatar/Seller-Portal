export class Userlogin {
    public _id? : string;
    public gst : string;
    public ShopName : string;
    public contact : string;
    public email : string;
    public sells : string;


constructor(p_email:string,p_gst:string,p_id:string,p_name:string,p_contact:string,p_sells:string)
    {

        this.email = p_email;
        this.gst = p_gst;
        this.ShopName = p_name;
        this.sells=p_sells;
        this.contact=p_contact;
        this._id = p_id;

    }

}