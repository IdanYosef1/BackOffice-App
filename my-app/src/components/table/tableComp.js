import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import WooCommerceAPI from "woocommerce-api";
import ProductComp from "./productComp";

const api = new WooCommerceAPI({
    url: "http://assignment.local",
    consumerKey: "ck_c421e11cc7fb828aa59ebd00e6f6e625c2c7be6e",
    consumerSecret: "cs_630daddd288ea4d74c0f59ed5979f014a71215d6",
    wpAPI: true,
    version: 'wc/v3'
});

function TableComp() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        function getProducts() {
            api.getAsync('products').then((response) => {
                if (response.statusCode === 200) {
                    setProducts(JSON.parse(response.toJSON().body));
                }
            })
                .catch((err) => console.log(err));
        }
        getProducts();
    }, []);

    const showProducts = products.map((product) => {
        return <ProductComp key={product.id} product={product} />
    })

    return (
        <div>
            <Table striped className="text-center">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {showProducts}
                </tbody>
            </Table>
        </div>
    )

}

export default TableComp;
