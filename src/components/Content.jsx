import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: 0,
    };
  }
  getData() {
    this.setState({ isLoaded: 1 });
    fetch("http://universities.hipolabs.com/search?country=Australia")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: 2,
          data: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteData() {
    this.setState(this.state.data.splice(this.state.data.length - 1, 1));
  }

  addData() {
    this.setState({ data: [...this.state.data, this.state.data[0]] });
  }

  render() {
    var { isLoaded, data } = this.state;

    var tableData = data.map((item) => {
      return (
        <tr
          key={item.domains}
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
            <div className="text-left font-medium text-green-500">
              {item.domains}
            </div>
          </td>
          <td className="p-2 w-fit whitespace-nowrap">
            <div className="text-left">{item.name}</div>
          </td>
          <td className="p-2 w-fit whitespace-nowrap text-blue-500">
            <div className="text-left">{item.web_pages}</div>
          </td>
          <td className="p-2 w-fit whitespace-nowrap">
            <div className="text-left">{item.stateProvince}</div>
          </td>
        </tr>
      );
    });

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
                    onClick={() => this.getData()}
                    className="w-fit p-2 px-4 mr-2 text-gray-100 font-semibold hover:scale-105 ease-in duration-300"
                  >
                    Load
                  </button>
                  <button
                    onClick={() => this.addData()}
                    className="w-fit p-2 px-4 mr-2 text-gray-100 font-semibold hover:scale-105 ease-in duration-300"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => this.deleteData()}
                    className="w-fit p-2 px-4 mr-2 text-gray-100 font-semibold hover:scale-105 ease-in duration-300"
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
                    {isLoaded == 0 ? (
                      <tr></tr>
                    ) : isLoaded == 1 ? (
                      <tr>
                        <td>Loading...</td>
                      </tr>
                    ) : (
                      tableData
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
