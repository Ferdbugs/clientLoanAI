import React, { Component } from "react"
import Pagination from "./Pagination"

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoaded: 0,
      currentPage: 1,
      rowsPerPage: 15,
    }
    this.props.loadData()
  }

  getData() {
    if (this.state.isLoaded != 2) {
      this.setState({ isLoaded: 1 })
      this.setState({ data: this.props.tableData, isLoaded: 2 })
    } else {
      this.props.loadData().then(() => {
        this.setState({ data: this.props.tableData })
      })
    }
  }

  deleteData() {
    this.props.deleteData(this.state.data)
    this.setState({ data: this.props.tableData })
  }

  addData() {
    this.props.addData(this.state.data)
    this.setState({ data: this.props.tableData })
  }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber })
  }

  render() {
    var { isLoaded, data, currentPage, rowsPerPage } = this.state
    var indexOfLastRow = currentPage * rowsPerPage
    var indexOfFirstRow = indexOfLastRow - rowsPerPage
    var currentPosts = data.slice(indexOfFirstRow, indexOfLastRow)

    var tableData = currentPosts ? (
      currentPosts.map((item) => {
        return (
          <tr
            key={item.name}
            className="cursor-pointer hover:scale-[1.008] ease-in duration-200 hover:bg-slate-100"
          >
            <td className="p-2 whitespace-nowrap">
              <div className="flex items-center">
                <div className="font-medium text-gray-800">
                  {item.alpha_two_code}
                </div>
              </div>
            </td>
            <td className="p-2 w-fit">
              <div className="text-left">{item.country}</div>
            </td>
            <td className="p-2 w-fit">
              {(() => {
                let domains = []
                for (let i = 0; i < item.domains.length; i++) {
                  domains.push(
                    <div className="text-left font-medium text-green-500">
                      {item.domains[i]}
                    </div>
                  )
                }
                return domains
              })()}
            </td>
            <td className="p-2 w-fit whitespace-nowrap">
              <div className="text-left">{item.name}</div>
            </td>
            <td className="p-2 w-fit whitespace-nowrap text-blue-500">
              {(() => {
                let pages = []
                for (let i = 0; i < item.web_pages.length; i++) {
                  pages.push(
                    <div className="text-left">{item.web_pages[i]}</div>
                  )
                }
                return pages
              })()}
            </td>
            <td className="p-2 w-fit whitespace-nowrap">
              <div className="text-left">{item.stateProvince}</div>
            </td>
          </tr>
        )
      })
    ) : (
      <div>No Data</div>
    )

    return (
      <div className="antialiased bg-gray-100 text-gray-600 w-full h-screen">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7d51e5] to-[#709dff]">
                    Customers
                  </h2>
                </div>
                <div>
                  <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="secondary"
                    onClick={() => this.getData()}
                    className="w-fit p-2 px-4 mr-2 text-gray-100 font-semibold hover:scale-105 ease-in duration-300 active:opacity-0 active:translate-y-4"
                  >
                    {isLoaded == 0 ? "Load" : "Refresh"}
                  </button>
                  <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="secondary"
                    onClick={() => this.addData()}
                    className="w-fit p-2 px-4 mr-2 text-gray-100 font-semibold hover:scale-105 ease-in duration-300 active:opacity-0 active:translate-y-4"
                  >
                    Add
                  </button>
                  <button
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="secondary"
                    onClick={() => this.deleteData()}
                    className="w-fit p-2 px-4 mr-2 text-gray-100 font-semibold hover:scale-105 ease-in duration-300 active:opacity-0 active:translate-y-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </header>
            <div className="p-3">
              <div className="overflow-y-auto overflow-x-hidden">
                <table className="table-auto w-full overflow-y-auto overflow-x-hidden">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr className="p-2 whitespace-nowrap"></tr>
                  </thead>
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap w-fit">
                        <div className="font-semibold text-left">
                          Alpha-Two Code
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap w-fit">
                        <div className="font-semibold text-left">Country</div>
                      </th>
                      <th className="p-2 whitespace-nowrap w-fit">
                        <div className="font-semibold text-left">Domains</div>
                      </th>
                      <th className="p-2 whitespace-nowrap w-fit">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap w-fit">
                        <div className="font-semibold text-left">Web Pages</div>
                      </th>
                      <th className="p-2 whitespace-nowrap w-fit">
                        <div className="font-semibold text-left">
                          State Province
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100 overflow-visible">
                    {isLoaded === 0 ? (
                      <tr></tr>
                    ) : isLoaded === 1 ? (
                      <tr>
                        <td>Loading...</td>
                      </tr>
                    ) : (
                      tableData
                    )}
                  </tbody>
                </table>
                <div className="flex flex-row w-full justify-end my-4">
                  {isLoaded === 2 ? (
                    <div className="flex">
                      <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7d51e5] to-[#709dff] py-2 px-2">
                        Showing results {(currentPage - 1) * rowsPerPage + 1} to{" "}
                        {currentPage * rowsPerPage}:
                      </p>
                      <Pagination
                        rowsPerPage={rowsPerPage}
                        totalRows={data.length}
                        paginate={this.paginate}
                      />{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
