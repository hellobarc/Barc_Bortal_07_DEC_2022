## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

Used resources:
https://github.com/grafikri/vue-middleware


// Modal 

https://blog.droidzone.in/2021/06/bootstrap-5-modal-in-vue-js-3/


// ALert

                        <div v-if="alert_next.length!=0">
                            <div class="alert alert-danger" role="alert">
                                <div v-for="(alert, index) in alert_next" :key="index">
                                     <p>{{alert}} </p>
                                </div>
                            </div>
                        </div>

                        <div v-if="alert_success!=null">
                            <div class="alert alert-success" role="alert">
                                     <p>{{alert_success}} </p>
                            </div>
                        </div>
