@extends('admin.admin_master')
@section('admin')
<div class="row g-4">
    <div class="col-md-12 col-lg-12 col-xl-4">
         <div class="card total-revenue-card shadow-sm mb-4">
            <div class="d-flex justify-content-between align-items-center mb-3 icon-wrapper-revenue">
            <div class="d-flex align-items-center gap-2">
                <div class="icon-wrapper rounded-circle d-flex align-items-center justify-content-center" >
                    <i class="fas fa-wallet"></i>
                </div>
                <div>
                    <p class="mb-0 fw-semibold">Total Revenue</p>
                </div>
            </div>
            </div>
            <div class="d-flex justify-content-between align-items-end icon-wrapper-revenue-bottom">
            <div>
                <h4 class="mb-1">₹8365.00</h4>
                <small class="text-success fw-semibold">8.5% <span class="text-muted">New Sessions Today</span></small>
            </div>
            <button class="btn  btn-sm px-3 reportbtn">View Report</button>
            </div>
        </div>
         </div>
           <div class="col-md-12 col-lg-12 col-xl-4">
             <div class="card total-revenue-card shadow-sm">
            <div class="d-flex justify-content-between align-items-center mb-3 icon-wrapper-revenue">
            <div class="d-flex align-items-center gap-2">
                <div class="icon-wrapper rounded-circle d-flex align-items-center justify-content-center">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div>
                    <p class="mb-0 fw-semibold">New Order</p>
                </div>
            </div>
            </div>
            <div class="d-flex justify-content-between align-items-end icon-wrapper-revenue-bottom">
            <div>
                <h4 class="mb-1">722</h4>
                <small class="text-success fw-semibold">8.5% <span class="text-muted">New Sessions Today</span></small>
            </div>
            <button class="btn  btn-outline-secondary  btn-sm px-3">View Report</button>
            </div>
        </div>
         </div>
           <div class="col-md-12 col-lg-12 col-xl-4">
             <div class="card total-revenue-card shadow-sm">
            <div class="d-flex justify-content-between align-items-center mb-3 icon-wrapper-revenue">
            <div class="d-flex align-items-center gap-2">
                <div class="icon-wrapper rounded-circle d-flex align-items-center justify-content-center">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div>
                    <p class="mb-0 fw-semibold">New Order</p>
                </div>
            </div>
            </div>
            <div class="d-flex justify-content-between align-items-end icon-wrapper-revenue-bottom">
            <div>
                <h4 class="mb-1">722</h4>
                <small class="text-success fw-semibold">8.5% <span class="text-muted">New Sessions Today</span></small>
            </div>
            <button class="btn  btn-outline-secondary  btn-sm px-3">View Report</button>
            </div>
        </div>
         </div>
       
       <div class="col-12">
        <div class="card shadow-sm">
                     <div class="card-body">
                        <div class="headergraph">
                           <h3>Popular Products</h3>
                           <div class="filters">
                              <select id="rangeSelector">
                                 <option value="today">Today</option>
                                 <option value="last_week">Last Week</option>
                                 <option value="last_month">Last Month</option>
                                 <option value="this_year" selected="">This Year</option>
                              </select>
                           </div>
                        </div>
                        <div class="table-responsive">
                           <table class="table product-table align-middle">
                              <thead>
                                 <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Sell</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>
                                       <div class="d-flex align-items-center productflex">
                                          <img src="{{asset('backend/assets/images/01.png')}}" class="product-img" alt="History Book">
                                          <div>
                                             <div class="product-name">History Book</div>
                                             <div class="product-id">ID: A3652</div>
                                          </div>
                                       </div>
                                    </td>
                                    <td>₹50 <span class="price-old">₹70</span></td>
                                    <td>450 <span class="text-muted">(650)</span></td>
                                    <td><span class="status-badge in-stock">Stock</span></td>
                                    <td class="action-icons">
                                       <i class="fas fa-pen"></i><i class="fas fa-trash"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="d-flex align-items-center productflex">
                                          <img src="{{asset('backend/assets/images/02.png')}}" class="product-img" alt="Colorful Pots">
                                          <div>
                                             <div class="product-name">Colorful Pots</div>
                                             <div class="product-id">ID: A5002</div>
                                          </div>
                                       </div>
                                    </td>
                                    <td>₹99 <span class="price-old">₹150</span></td>
                                    <td>750 <span class="text-muted">(00)</span></td>
                                    <td><span class="status-badge out-stock">Out of Stock</span></td>
                                    <td class="action-icons">
                                       <i class="fas fa-pen"></i><i class="fas fa-trash"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="d-flex align-items-center productflex">
                                          <img src="{{asset('backend/assets/images/03.png')}}" class="product-img" alt="Pearl Bracelet">
                                          <div>
                                             <div class="product-name">Pearl Bracelet</div>
                                             <div class="product-id">ID: A6598</div>
                                          </div>
                                       </div>
                                    </td>
                                    <td>₹199 <span class="price-old">₹250</span></td>
                                    <td>280 <span class="text-muted">(220)</span></td>
                                    <td><span class="status-badge in-stock">Stock</span></td>
                                    <td class="action-icons">
                                       <i class="fas fa-pen"></i><i class="fas fa-trash"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="d-flex align-items-center productflex">
                                          <img src="{{asset('backend/assets/images/04.png')}}" class="product-img" alt="Dancing Man">
                                          <div>
                                             <div class="product-name">Dancing Man</div>
                                             <div class="product-id">ID: A9547</div>
                                          </div>
                                       </div>
                                    </td>
                                    <td>₹40 <span class="price-old">₹49</span></td>
                                    <td>500 <span class="text-muted">(1000)</span></td>
                                    <td><span class="status-badge out-stock">Out of Stock</span></td>
                                    <td class="action-icons">
                                       <i class="fas fa-pen"></i><i class="fas fa-trash"></i>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div class="d-flex align-items-center productflex">
                                          <img src="{{asset('backend/assets/images/05.png')}}" class="product-img" alt="Fire Lamp">
                                          <div>
                                             <div class="product-name">Fire Lamp</div>
                                             <div class="product-id">ID: A2047</div>
                                          </div>
                                       </div>
                                    </td>
                                    <td>₹80 <span class="price-old">₹59</span></td>
                                    <td>800 <span class="text-muted">(2000)</span></td>
                                    <td><span class="status-badge out-stock">Out of Stock</span></td>
                                    <td class="action-icons">
                                       <i class="fas fa-pen"></i><i class="fas fa-trash"></i>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
       </div>
   
  
</div>


@endsection