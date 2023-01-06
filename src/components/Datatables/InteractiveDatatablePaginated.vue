<template>
  <div>


    <v-data-table
      :headers="headers"
      :items="results"
      sort-by="brand"
      class="elevation-1"
      hide-default-footer
      disable-sort

  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-toolbar-title>Products</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
            >
              New Product
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.title"
                        label="Product name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.brand"
                        label="Brand"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.category"
                        label="Category"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.price"
                        label="Price"
                    ></v-text-field>
                  </v-col>
                  <v-col
                      cols="12"
                      sm="6"
                      md="4"
                  >
                    <v-text-field
                        v-model="editedItem.rating"
                        label="Rating"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
          color="primary"
          @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  <div class="text-center mt-3">
    <v-pagination
        v-model="page"
        :length="pagesize"
        circle
    ></v-pagination>
  </div>
  </div>

</template>
<script>
import axios from "axios";

export default {
  name: 'InteractiveDatatablePaginated',

  data: function () {
    return {
      page: (isNaN(this.$route.params.page) ? parseInt(this.$route.params.page) : 1),
      pagesize:0,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Product name',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        {text: 'Brand', value: 'brand'},
        {text: 'Category', value: 'category'},
        {text: 'Price', value: 'price'},
        {text: 'Rating', value: 'rating'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      results: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        brand: '',
        category: '',
        price: 0,
        rating: 0,
      },
      defaultItem: {
        name: '',
        brand: '',
        category: '',
        price: 0,
        rating: 0,
      },
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    page() {




         this.$route.params.page = String(this.page);
          this.$router.push(String(this.page))




      this.initialize();
    },

    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.$watch(
        () => this.$route.path,
        (toParams) => {
          if(!toParams.substring(1).includes("/")){
            this.page=1;
          }
        }
    )
    this.initialize();

  },

  methods: {
    initialize () {


      const config = {
        headers:{
          'Content-Type': 'application/json'

        }
      };

      var limit=10;
      var skip=(parseInt(this.page)-1)*10;
      var url='https://dummyjson.com/products?limit='+limit+'&skip='+skip;
      axios
          .get(url,config)
          .then((res) => {
            if(res.status==200){

              // console.log(res.data.products);
              this.results=res.data.products;
              this.pagesize= Math.ceil(res.data.total/10);
            }
          })
          .catch( error => {
                if(error){
                  this.formmessage='Wrong username or password'

                }

              }

          );
    },

    editItem (item) {
      this.editedIndex = this.results.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.results.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.results.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.results[this.editedIndex], this.editedItem)
      } else {
        this.results.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>