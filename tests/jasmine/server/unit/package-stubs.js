// DEPENDS ON GLOBAL OBJECT: 'ComponentMocker'

var packageMetadata = {
  "npm-bcrypt": {
    "NpmModuleBcrypt": {
      "type": "object",
      "members": {
        "genSaltSync": {
          "type": "function"
        },
        "genSalt": {
          "type": "function"
        },
        "hashSync": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        },
        "compareSync": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "getRounds": {
          "type": "function"
        }
      }
    }
  },
  "base64": {
    "Base64": {
      "type": "object",
      "members": {
        "encode": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        },
        "decode": {
          "type": "function"
        }
      }
    }
  },
  "ejson": {
    "EJSON": {
      "type": "object",
      "members": {
        "addType": {
          "type": "function"
        },
        "toJSONValue": {
          "type": "function"
        },
        "fromJSONValue": {
          "type": "function"
        },
        "stringify": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "isBinary": {
          "type": "function"
        },
        "equals": {
          "type": "function"
        },
        "clone": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        }
      }
    },
    "EJSONTest": {
      "type": "object"
    }
  },
  "check": {
    "check": {
      "type": "function"
    },
    "Match": {
      "type": "object",
      "members": {
        "Optional": {
          "type": "function"
        },
        "OneOf": {
          "type": "function"
        },
        "Any": {
          "type": "array"
        },
        "Where": {
          "type": "function"
        },
        "ObjectIncluding": {
          "type": "function"
        },
        "ObjectWithValues": {
          "type": "function"
        },
        "Integer": {
          "type": "array"
        },
        "Error": {
          "type": "function",
          "refID": 13,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 13
                }
              }
            }
          }
        },
        "test": {
          "type": "function"
        }
      }
    }
  },
  "babel-compiler": {
    "Babel": {
      "type": "object",
      "members": {
        "getDefaultOptions": {
          "type": "function"
        },
        "validateExtraFeatures": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "transformMeteor": {
          "type": "function"
        },
        "setCacheDir": {
          "type": "function"
        }
      }
    },
    "BabelCompiler": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "processFilesForTarget": {
              "type": "function"
            },
            "setDiskCacheDirectory": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ecmascript": {
    "ECMAScript": {
      "type": "object",
      "members": {
        "compileForShell": {
          "type": "function"
        }
      }
    }
  },
  "random": {
    "Random": {
      "type": "object",
      "members": {
        "createWithSeeds": {
          "type": "function"
        },
        "fraction": {
          "type": "function"
        },
        "hexString": {
          "type": "function"
        },
        "id": {
          "type": "function"
        },
        "secret": {
          "type": "function"
        },
        "choice": {
          "type": "function"
        }
      }
    }
  },
  "rate-limit": {
    "RateLimiter": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "check": {
              "type": "function"
            },
            "addRule": {
              "type": "function"
            },
            "increment": {
              "type": "function"
            },
            "removeRule": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ddp-rate-limiter": {
    "DDPRateLimiter": {
      "type": "object",
      "members": {
        "getErrorMessage": {
          "type": "function"
        },
        "setErrorMessage": {
          "type": "function"
        },
        "addRule": {
          "type": "function"
        },
        "printRules": {
          "type": "function"
        },
        "removeRule": {
          "type": "function"
        }
      }
    }
  },
  "callback-hook": {
    "Hook": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "each": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "tracker": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "retry": {
    "Retry": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "clear": {
              "type": "function"
            },
            "retryLater": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "id-map": {
    "IdMap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ddp-common": {
    "DDPCommon": {
      "type": "object",
      "members": {
        "Heartbeat": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "stop": {
                  "type": "function"
                },
                "start": {
                  "type": "function"
                },
                "messageReceived": {
                  "type": "function"
                }
              }
            }
          }
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "parseDDP": {
          "type": "function"
        },
        "stringifyDDP": {
          "type": "function"
        },
        "MethodInvocation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "unblock": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        },
        "RandomStream": {
          "type": "function",
          "members": {
            "get": {
              "type": "function"
            }
          }
        },
        "makeRpcSeed": {
          "type": "function"
        }
      }
    }
  },
  "diff-sequence": {
    "DiffSequence": {
      "type": "object",
      "members": {
        "diffQueryChanges": {
          "type": "function"
        },
        "diffQueryUnorderedChanges": {
          "type": "function"
        },
        "diffQueryOrderedChanges": {
          "type": "function"
        },
        "diffObjects": {
          "type": "function"
        },
        "makeChangedFields": {
          "type": "function"
        },
        "applyChanges": {
          "type": "function"
        }
      }
    }
  },
  "mongo-id": {
    "MongoID": {
      "type": "object",
      "members": {
        "ObjectID": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                },
                "equals": {
                  "type": "function"
                },
                "clone": {
                  "type": "function"
                },
                "typeName": {
                  "type": "function"
                },
                "getTimestamp": {
                  "type": "function"
                },
                "toHexString": {
                  "type": "function",
                  "refID": 13
                },
                "toJSONValue": {
                  "ref": 13
                },
                "valueOf": {
                  "ref": 13
                }
              }
            }
          }
        },
        "idStringify": {
          "type": "function"
        },
        "idParse": {
          "type": "function"
        }
      }
    }
  },
  "ddp-client": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "LivedataTest": {
      "type": "object",
      "members": {
        "ClientStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "send": {
                  "type": "function"
                },
                "on": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toSockjsUrl": {
          "type": "function"
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "Connection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "registerStore": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "userId": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "logging": {
    "Log": {
      "type": "function",
      "members": {
        "outputFormat": {
          "type": "constant",
          "value": "json"
        },
        "debug": {
          "type": "function"
        },
        "info": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "format": {
          "type": "function"
        },
        "objFromText": {
          "type": "function"
        }
      }
    }
  },
  "routepolicy": {
    "RoutePolicy": {
      "type": "object",
      "members": {
        "urlPrefixTypes": {
          "type": "object",
          "members": {
            "/sockjs/": {
              "type": "constant",
              "value": "network"
            },
            "/_oauth/": {
              "type": "constant",
              "value": "network"
            }
          }
        },
        "urlPrefixMatches": {
          "type": "function"
        },
        "checkType": {
          "type": "function"
        },
        "checkUrlPrefix": {
          "type": "function"
        },
        "checkForConflictWithStatic": {
          "type": "function"
        },
        "declare": {
          "type": "function"
        },
        "isValidUrl": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "urlPrefixesFor": {
          "type": "function"
        }
      }
    },
    "RoutePolicyTest": {
      "type": "object",
      "members": {
        "Constructor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "urlPrefixMatches": {
                  "type": "function"
                },
                "checkType": {
                  "type": "function"
                },
                "checkUrlPrefix": {
                  "type": "function"
                },
                "checkForConflictWithStatic": {
                  "type": "function"
                },
                "declare": {
                  "type": "function"
                },
                "isValidUrl": {
                  "type": "function"
                },
                "classify": {
                  "type": "function"
                },
                "urlPrefixesFor": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "deps": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "htmljs": {
    "HTML": {
      "type": "object",
      "members": {
        "Visitor": {
          "type": "function",
          "members": {
            "def": {
              "type": "function",
              "refID": 2
            },
            "extend": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "visit": {
                  "type": "function",
                  "refID": 7
                },
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function",
                  "refID": 25
                }
              }
            }
          }
        },
        "TransformingVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function",
                  "refID": 29
                },
                "visitPrimitive": {
                  "ref": 29
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "ref": 29
                },
                "visitCharRef": {
                  "ref": 29
                },
                "visitRaw": {
                  "ref": 29
                },
                "visitObject": {
                  "ref": 29
                },
                "visitFunction": {
                  "ref": 29
                },
                "visitTag": {
                  "type": "function"
                },
                "visitChildren": {
                  "type": "function"
                },
                "visitAttributes": {
                  "type": "function"
                },
                "visitAttribute": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                }
              }
            }
          }
        },
        "ToTextVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toHTML": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "ToHTMLVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toText": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "Tag": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 82
            },
            "prototype": {
              "type": "object",
              "members": {
                "tagName": {
                  "type": "constant",
                  "value": ""
                },
                "attrs": {
                  "type": "null",
                  "value": null
                },
                "children": {
                  "type": "array",
                  "refID": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Attrs": {
          "type": "function"
        },
        "getTag": {
          "type": "function"
        },
        "ensureTag": {
          "type": "function"
        },
        "isTagEnsured": {
          "type": "function"
        },
        "getSymbolName": {
          "type": "function"
        },
        "knownElementNames": {
          "type": "array"
        },
        "knownSVGElementNames": {
          "type": "array"
        },
        "voidElementNames": {
          "type": "array"
        },
        "isKnownElement": {
          "type": "function"
        },
        "isKnownSVGElement": {
          "type": "function"
        },
        "isVoidElement": {
          "type": "function"
        },
        "A": {
          "type": "function",
          "refID": 104,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 104
                },
                "tagName": {
                  "type": "constant",
                  "value": "a"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ABBR": {
          "type": "function",
          "refID": 106,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 106
                },
                "tagName": {
                  "type": "constant",
                  "value": "abbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ACRONYM": {
          "type": "function",
          "refID": 108,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 108
                },
                "tagName": {
                  "type": "constant",
                  "value": "acronym"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ADDRESS": {
          "type": "function",
          "refID": 110,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 110
                },
                "tagName": {
                  "type": "constant",
                  "value": "address"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "APPLET": {
          "type": "function",
          "refID": 112,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 112
                },
                "tagName": {
                  "type": "constant",
                  "value": "applet"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AREA": {
          "type": "function",
          "refID": 114,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 114
                },
                "tagName": {
                  "type": "constant",
                  "value": "area"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ARTICLE": {
          "type": "function",
          "refID": 116,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 116
                },
                "tagName": {
                  "type": "constant",
                  "value": "article"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ASIDE": {
          "type": "function",
          "refID": 118,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 118
                },
                "tagName": {
                  "type": "constant",
                  "value": "aside"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AUDIO": {
          "type": "function",
          "refID": 120,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 120
                },
                "tagName": {
                  "type": "constant",
                  "value": "audio"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "B": {
          "type": "function",
          "refID": 122,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 122
                },
                "tagName": {
                  "type": "constant",
                  "value": "b"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASE": {
          "type": "function",
          "refID": 124,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 124
                },
                "tagName": {
                  "type": "constant",
                  "value": "base"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASEFONT": {
          "type": "function",
          "refID": 126,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 126
                },
                "tagName": {
                  "type": "constant",
                  "value": "basefont"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDI": {
          "type": "function",
          "refID": 128,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 128
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdi"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDO": {
          "type": "function",
          "refID": 130,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 130
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdo"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BIG": {
          "type": "function",
          "refID": 132,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 132
                },
                "tagName": {
                  "type": "constant",
                  "value": "big"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BLOCKQUOTE": {
          "type": "function",
          "refID": 134,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 134
                },
                "tagName": {
                  "type": "constant",
                  "value": "blockquote"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BODY": {
          "type": "function",
          "refID": 136,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 136
                },
                "tagName": {
                  "type": "constant",
                  "value": "body"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BR": {
          "type": "function",
          "refID": 138,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 138
                },
                "tagName": {
                  "type": "constant",
                  "value": "br"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BUTTON": {
          "type": "function",
          "refID": 140,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 140
                },
                "tagName": {
                  "type": "constant",
                  "value": "button"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CANVAS": {
          "type": "function",
          "refID": 142,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 142
                },
                "tagName": {
                  "type": "constant",
                  "value": "canvas"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CAPTION": {
          "type": "function",
          "refID": 144,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 144
                },
                "tagName": {
                  "type": "constant",
                  "value": "caption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CENTER": {
          "type": "function",
          "refID": 146,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 146
                },
                "tagName": {
                  "type": "constant",
                  "value": "center"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CITE": {
          "type": "function",
          "refID": 148,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 148
                },
                "tagName": {
                  "type": "constant",
                  "value": "cite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CODE": {
          "type": "function",
          "refID": 150,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 150
                },
                "tagName": {
                  "type": "constant",
                  "value": "code"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COL": {
          "type": "function",
          "refID": 152,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 152
                },
                "tagName": {
                  "type": "constant",
                  "value": "col"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLGROUP": {
          "type": "function",
          "refID": 154,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 154
                },
                "tagName": {
                  "type": "constant",
                  "value": "colgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COMMAND": {
          "type": "function",
          "refID": 156,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 156
                },
                "tagName": {
                  "type": "constant",
                  "value": "command"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATA": {
          "type": "function",
          "refID": 158,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 158
                },
                "tagName": {
                  "type": "constant",
                  "value": "data"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATAGRID": {
          "type": "function",
          "refID": 160,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 160
                },
                "tagName": {
                  "type": "constant",
                  "value": "datagrid"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATALIST": {
          "type": "function",
          "refID": 162,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 162
                },
                "tagName": {
                  "type": "constant",
                  "value": "datalist"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DD": {
          "type": "function",
          "refID": 164,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 164
                },
                "tagName": {
                  "type": "constant",
                  "value": "dd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEL": {
          "type": "function",
          "refID": 166,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 166
                },
                "tagName": {
                  "type": "constant",
                  "value": "del"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DETAILS": {
          "type": "function",
          "refID": 168,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 168
                },
                "tagName": {
                  "type": "constant",
                  "value": "details"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DFN": {
          "type": "function",
          "refID": 170,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 170
                },
                "tagName": {
                  "type": "constant",
                  "value": "dfn"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIR": {
          "type": "function",
          "refID": 172,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 172
                },
                "tagName": {
                  "type": "constant",
                  "value": "dir"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIV": {
          "type": "function",
          "refID": 174,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 174
                },
                "tagName": {
                  "type": "constant",
                  "value": "div"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DL": {
          "type": "function",
          "refID": 176,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 176
                },
                "tagName": {
                  "type": "constant",
                  "value": "dl"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DT": {
          "type": "function",
          "refID": 178,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 178
                },
                "tagName": {
                  "type": "constant",
                  "value": "dt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EM": {
          "type": "function",
          "refID": 180,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 180
                },
                "tagName": {
                  "type": "constant",
                  "value": "em"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EMBED": {
          "type": "function",
          "refID": 182,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 182
                },
                "tagName": {
                  "type": "constant",
                  "value": "embed"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EVENTSOURCE": {
          "type": "function",
          "refID": 184,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 184
                },
                "tagName": {
                  "type": "constant",
                  "value": "eventsource"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIELDSET": {
          "type": "function",
          "refID": 186,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 186
                },
                "tagName": {
                  "type": "constant",
                  "value": "fieldset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGCAPTION": {
          "type": "function",
          "refID": 188,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 188
                },
                "tagName": {
                  "type": "constant",
                  "value": "figcaption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGURE": {
          "type": "function",
          "refID": 190,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 190
                },
                "tagName": {
                  "type": "constant",
                  "value": "figure"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT": {
          "type": "function",
          "refID": 192,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 192
                },
                "tagName": {
                  "type": "constant",
                  "value": "font"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOOTER": {
          "type": "function",
          "refID": 194,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 194
                },
                "tagName": {
                  "type": "constant",
                  "value": "footer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FORM": {
          "type": "function",
          "refID": 196,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 196
                },
                "tagName": {
                  "type": "constant",
                  "value": "form"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAME": {
          "type": "function",
          "refID": 198,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 198
                },
                "tagName": {
                  "type": "constant",
                  "value": "frame"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAMESET": {
          "type": "function",
          "refID": 200,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 200
                },
                "tagName": {
                  "type": "constant",
                  "value": "frameset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H1": {
          "type": "function",
          "refID": 202,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 202
                },
                "tagName": {
                  "type": "constant",
                  "value": "h1"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H2": {
          "type": "function",
          "refID": 204,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 204
                },
                "tagName": {
                  "type": "constant",
                  "value": "h2"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H3": {
          "type": "function",
          "refID": 206,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 206
                },
                "tagName": {
                  "type": "constant",
                  "value": "h3"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H4": {
          "type": "function",
          "refID": 208,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 208
                },
                "tagName": {
                  "type": "constant",
                  "value": "h4"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H5": {
          "type": "function",
          "refID": 210,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 210
                },
                "tagName": {
                  "type": "constant",
                  "value": "h5"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H6": {
          "type": "function",
          "refID": 212,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 212
                },
                "tagName": {
                  "type": "constant",
                  "value": "h6"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEAD": {
          "type": "function",
          "refID": 214,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 214
                },
                "tagName": {
                  "type": "constant",
                  "value": "head"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEADER": {
          "type": "function",
          "refID": 216,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 216
                },
                "tagName": {
                  "type": "constant",
                  "value": "header"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HGROUP": {
          "type": "function",
          "refID": 218,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 218
                },
                "tagName": {
                  "type": "constant",
                  "value": "hgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HR": {
          "type": "function",
          "refID": 220,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 220
                },
                "tagName": {
                  "type": "constant",
                  "value": "hr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HTML": {
          "type": "function",
          "refID": 222,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 222
                },
                "tagName": {
                  "type": "constant",
                  "value": "html"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "I": {
          "type": "function",
          "refID": 224,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 224
                },
                "tagName": {
                  "type": "constant",
                  "value": "i"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IFRAME": {
          "type": "function",
          "refID": 226,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 226
                },
                "tagName": {
                  "type": "constant",
                  "value": "iframe"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMG": {
          "type": "function",
          "refID": 228,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 228
                },
                "tagName": {
                  "type": "constant",
                  "value": "img"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INPUT": {
          "type": "function",
          "refID": 230,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 230
                },
                "tagName": {
                  "type": "constant",
                  "value": "input"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INS": {
          "type": "function",
          "refID": 232,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 232
                },
                "tagName": {
                  "type": "constant",
                  "value": "ins"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ISINDEX": {
          "type": "function",
          "refID": 234,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 234
                },
                "tagName": {
                  "type": "constant",
                  "value": "isindex"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KBD": {
          "type": "function",
          "refID": 236,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 236
                },
                "tagName": {
                  "type": "constant",
                  "value": "kbd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KEYGEN": {
          "type": "function",
          "refID": 238,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 238
                },
                "tagName": {
                  "type": "constant",
                  "value": "keygen"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LABEL": {
          "type": "function",
          "refID": 240,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 240
                },
                "tagName": {
                  "type": "constant",
                  "value": "label"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LEGEND": {
          "type": "function",
          "refID": 242,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 242
                },
                "tagName": {
                  "type": "constant",
                  "value": "legend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LI": {
          "type": "function",
          "refID": 244,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 244
                },
                "tagName": {
                  "type": "constant",
                  "value": "li"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINK": {
          "type": "function",
          "refID": 246,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 246
                },
                "tagName": {
                  "type": "constant",
                  "value": "link"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAIN": {
          "type": "function",
          "refID": 248,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 248
                },
                "tagName": {
                  "type": "constant",
                  "value": "main"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAP": {
          "type": "function",
          "refID": 250,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 250
                },
                "tagName": {
                  "type": "constant",
                  "value": "map"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARK": {
          "type": "function",
          "refID": 252,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 252
                },
                "tagName": {
                  "type": "constant",
                  "value": "mark"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MENU": {
          "type": "function",
          "refID": 254,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 254
                },
                "tagName": {
                  "type": "constant",
                  "value": "menu"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "META": {
          "type": "function",
          "refID": 256,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 256
                },
                "tagName": {
                  "type": "constant",
                  "value": "meta"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METER": {
          "type": "function",
          "refID": 258,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 258
                },
                "tagName": {
                  "type": "constant",
                  "value": "meter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NAV": {
          "type": "function",
          "refID": 260,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 260
                },
                "tagName": {
                  "type": "constant",
                  "value": "nav"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOFRAMES": {
          "type": "function",
          "refID": 262,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 262
                },
                "tagName": {
                  "type": "constant",
                  "value": "noframes"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOSCRIPT": {
          "type": "function",
          "refID": 264,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 264
                },
                "tagName": {
                  "type": "constant",
                  "value": "noscript"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OBJECT": {
          "type": "function",
          "refID": 266,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 266
                },
                "tagName": {
                  "type": "constant",
                  "value": "object"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OL": {
          "type": "function",
          "refID": 268,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 268
                },
                "tagName": {
                  "type": "constant",
                  "value": "ol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTGROUP": {
          "type": "function",
          "refID": 270,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 270
                },
                "tagName": {
                  "type": "constant",
                  "value": "optgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTION": {
          "type": "function",
          "refID": 272,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 272
                },
                "tagName": {
                  "type": "constant",
                  "value": "option"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OUTPUT": {
          "type": "function",
          "refID": 274,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 274
                },
                "tagName": {
                  "type": "constant",
                  "value": "output"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "P": {
          "type": "function",
          "refID": 276,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 276
                },
                "tagName": {
                  "type": "constant",
                  "value": "p"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PARAM": {
          "type": "function",
          "refID": 278,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 278
                },
                "tagName": {
                  "type": "constant",
                  "value": "param"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PRE": {
          "type": "function",
          "refID": 280,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 280
                },
                "tagName": {
                  "type": "constant",
                  "value": "pre"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PROGRESS": {
          "type": "function",
          "refID": 282,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 282
                },
                "tagName": {
                  "type": "constant",
                  "value": "progress"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Q": {
          "type": "function",
          "refID": 284,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 284
                },
                "tagName": {
                  "type": "constant",
                  "value": "q"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RP": {
          "type": "function",
          "refID": 286,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 286
                },
                "tagName": {
                  "type": "constant",
                  "value": "rp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RT": {
          "type": "function",
          "refID": 288,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 288
                },
                "tagName": {
                  "type": "constant",
                  "value": "rt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RUBY": {
          "type": "function",
          "refID": 290,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 290
                },
                "tagName": {
                  "type": "constant",
                  "value": "ruby"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "S": {
          "type": "function",
          "refID": 292,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 292
                },
                "tagName": {
                  "type": "constant",
                  "value": "s"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SAMP": {
          "type": "function",
          "refID": 294,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 294
                },
                "tagName": {
                  "type": "constant",
                  "value": "samp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SCRIPT": {
          "type": "function",
          "refID": 296,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 296
                },
                "tagName": {
                  "type": "constant",
                  "value": "script"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SECTION": {
          "type": "function",
          "refID": 298,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 298
                },
                "tagName": {
                  "type": "constant",
                  "value": "section"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SELECT": {
          "type": "function",
          "refID": 300,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 300
                },
                "tagName": {
                  "type": "constant",
                  "value": "select"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SMALL": {
          "type": "function",
          "refID": 302,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 302
                },
                "tagName": {
                  "type": "constant",
                  "value": "small"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SOURCE": {
          "type": "function",
          "refID": 304,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 304
                },
                "tagName": {
                  "type": "constant",
                  "value": "source"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SPAN": {
          "type": "function",
          "refID": 306,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 306
                },
                "tagName": {
                  "type": "constant",
                  "value": "span"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRIKE": {
          "type": "function",
          "refID": 308,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 308
                },
                "tagName": {
                  "type": "constant",
                  "value": "strike"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRONG": {
          "type": "function",
          "refID": 310,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 310
                },
                "tagName": {
                  "type": "constant",
                  "value": "strong"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STYLE": {
          "type": "function",
          "refID": 312,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 312
                },
                "tagName": {
                  "type": "constant",
                  "value": "style"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUB": {
          "type": "function",
          "refID": 314,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 314
                },
                "tagName": {
                  "type": "constant",
                  "value": "sub"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUMMARY": {
          "type": "function",
          "refID": 316,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 316
                },
                "tagName": {
                  "type": "constant",
                  "value": "summary"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUP": {
          "type": "function",
          "refID": 318,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 318
                },
                "tagName": {
                  "type": "constant",
                  "value": "sup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TABLE": {
          "type": "function",
          "refID": 320,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 320
                },
                "tagName": {
                  "type": "constant",
                  "value": "table"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TBODY": {
          "type": "function",
          "refID": 322,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 322
                },
                "tagName": {
                  "type": "constant",
                  "value": "tbody"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TD": {
          "type": "function",
          "refID": 324,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 324
                },
                "tagName": {
                  "type": "constant",
                  "value": "td"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTAREA": {
          "type": "function",
          "refID": 326,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 326
                },
                "tagName": {
                  "type": "constant",
                  "value": "textarea"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TFOOT": {
          "type": "function",
          "refID": 328,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 328
                },
                "tagName": {
                  "type": "constant",
                  "value": "tfoot"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TH": {
          "type": "function",
          "refID": 330,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 330
                },
                "tagName": {
                  "type": "constant",
                  "value": "th"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "THEAD": {
          "type": "function",
          "refID": 332,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 332
                },
                "tagName": {
                  "type": "constant",
                  "value": "thead"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TIME": {
          "type": "function",
          "refID": 334,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 334
                },
                "tagName": {
                  "type": "constant",
                  "value": "time"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TITLE": {
          "type": "function",
          "refID": 336,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 336
                },
                "tagName": {
                  "type": "constant",
                  "value": "title"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TR": {
          "type": "function",
          "refID": 338,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 338
                },
                "tagName": {
                  "type": "constant",
                  "value": "tr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TRACK": {
          "type": "function",
          "refID": 340,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 340
                },
                "tagName": {
                  "type": "constant",
                  "value": "track"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TT": {
          "type": "function",
          "refID": 342,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 342
                },
                "tagName": {
                  "type": "constant",
                  "value": "tt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "U": {
          "type": "function",
          "refID": 344,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 344
                },
                "tagName": {
                  "type": "constant",
                  "value": "u"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "UL": {
          "type": "function",
          "refID": 346,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 346
                },
                "tagName": {
                  "type": "constant",
                  "value": "ul"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VAR": {
          "type": "function",
          "refID": 348,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 348
                },
                "tagName": {
                  "type": "constant",
                  "value": "var"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIDEO": {
          "type": "function",
          "refID": 350,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 350
                },
                "tagName": {
                  "type": "constant",
                  "value": "video"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "WBR": {
          "type": "function",
          "refID": 352,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 352
                },
                "tagName": {
                  "type": "constant",
                  "value": "wbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPH": {
          "type": "function",
          "refID": 354,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 354
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHDEF": {
          "type": "function",
          "refID": 356,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 356
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphDef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHITEM": {
          "type": "function",
          "refID": 358,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 358
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphItem"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATE": {
          "type": "function",
          "refID": 360,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 360
                },
                "tagName": {
                  "type": "constant",
                  "value": "animate"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATECOLOR": {
          "type": "function",
          "refID": 362,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 362
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateColor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATEMOTION": {
          "type": "function",
          "refID": 364,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 364
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateMotion"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATETRANSFORM": {
          "type": "function",
          "refID": 366,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 366
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateTransform"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CIRCLE": {
          "type": "function",
          "refID": 368,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 368
                },
                "tagName": {
                  "type": "constant",
                  "value": "circle"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CLIPPATH": {
          "type": "function",
          "refID": 370,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 370
                },
                "tagName": {
                  "type": "constant",
                  "value": "clipPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLOR_PROFILE": {
          "type": "function",
          "refID": 372,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 372
                },
                "tagName": {
                  "type": "constant",
                  "value": "color-profile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CURSOR": {
          "type": "function",
          "refID": 374,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 374
                },
                "tagName": {
                  "type": "constant",
                  "value": "cursor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEFS": {
          "type": "function",
          "refID": 376,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 376
                },
                "tagName": {
                  "type": "constant",
                  "value": "defs"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DESC": {
          "type": "function",
          "refID": 378,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 378
                },
                "tagName": {
                  "type": "constant",
                  "value": "desc"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ELLIPSE": {
          "type": "function",
          "refID": 380,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 380
                },
                "tagName": {
                  "type": "constant",
                  "value": "ellipse"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEBLEND": {
          "type": "function",
          "refID": 382,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 382
                },
                "tagName": {
                  "type": "constant",
                  "value": "feBlend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOLORMATRIX": {
          "type": "function",
          "refID": 384,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 384
                },
                "tagName": {
                  "type": "constant",
                  "value": "feColorMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPONENTTRANSFER": {
          "type": "function",
          "refID": 386,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 386
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComponentTransfer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPOSITE": {
          "type": "function",
          "refID": 388,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 388
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComposite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECONVOLVEMATRIX": {
          "type": "function",
          "refID": 390,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 390
                },
                "tagName": {
                  "type": "constant",
                  "value": "feConvolveMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDIFFUSELIGHTING": {
          "type": "function",
          "refID": 392,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 392
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDiffuseLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISPLACEMENTMAP": {
          "type": "function",
          "refID": 394,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 394
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDisplacementMap"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISTANTLIGHT": {
          "type": "function",
          "refID": 396,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 396
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDistantLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFLOOD": {
          "type": "function",
          "refID": 398,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 398
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFlood"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCA": {
          "type": "function",
          "refID": 400,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 400
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncA"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCB": {
          "type": "function",
          "refID": 402,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 402
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncB"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCG": {
          "type": "function",
          "refID": 404,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 404
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncG"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCR": {
          "type": "function",
          "refID": 406,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 406
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncR"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEGAUSSIANBLUR": {
          "type": "function",
          "refID": 408,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 408
                },
                "tagName": {
                  "type": "constant",
                  "value": "feGaussianBlur"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEIMAGE": {
          "type": "function",
          "refID": 410,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 410
                },
                "tagName": {
                  "type": "constant",
                  "value": "feImage"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGE": {
          "type": "function",
          "refID": 412,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 412
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMerge"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGENODE": {
          "type": "function",
          "refID": 414,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 414
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMergeNode"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMORPHOLOGY": {
          "type": "function",
          "refID": 416,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 416
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMorphology"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEOFFSET": {
          "type": "function",
          "refID": 418,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 418
                },
                "tagName": {
                  "type": "constant",
                  "value": "feOffset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEPOINTLIGHT": {
          "type": "function",
          "refID": 420,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 420
                },
                "tagName": {
                  "type": "constant",
                  "value": "fePointLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPECULARLIGHTING": {
          "type": "function",
          "refID": 422,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 422
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpecularLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPOTLIGHT": {
          "type": "function",
          "refID": 424,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 424
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpotLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETILE": {
          "type": "function",
          "refID": 426,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 426
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETURBULENCE": {
          "type": "function",
          "refID": 428,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 428
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTurbulence"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FILTER": {
          "type": "function",
          "refID": 430,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 430
                },
                "tagName": {
                  "type": "constant",
                  "value": "filter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE": {
          "type": "function",
          "refID": 432,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 432
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_FORMAT": {
          "type": "function",
          "refID": 434,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 434
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-format"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_NAME": {
          "type": "function",
          "refID": 436,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 436
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-name"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_SRC": {
          "type": "function",
          "refID": 438,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 438
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-src"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_URI": {
          "type": "function",
          "refID": 440,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 440
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-uri"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOREIGNOBJECT": {
          "type": "function",
          "refID": 442,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 442
                },
                "tagName": {
                  "type": "constant",
                  "value": "foreignObject"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "G": {
          "type": "function",
          "refID": 444,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 444
                },
                "tagName": {
                  "type": "constant",
                  "value": "g"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPH": {
          "type": "function",
          "refID": 446,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 446
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPHREF": {
          "type": "function",
          "refID": 448,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 448
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyphRef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HKERN": {
          "type": "function",
          "refID": 450,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 450
                },
                "tagName": {
                  "type": "constant",
                  "value": "hkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMAGE": {
          "type": "function",
          "refID": 452,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 452
                },
                "tagName": {
                  "type": "constant",
                  "value": "image"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINE": {
          "type": "function",
          "refID": 454,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 454
                },
                "tagName": {
                  "type": "constant",
                  "value": "line"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINEARGRADIENT": {
          "type": "function",
          "refID": 456,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 456
                },
                "tagName": {
                  "type": "constant",
                  "value": "linearGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARKER": {
          "type": "function",
          "refID": 458,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 458
                },
                "tagName": {
                  "type": "constant",
                  "value": "marker"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MASK": {
          "type": "function",
          "refID": 460,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 460
                },
                "tagName": {
                  "type": "constant",
                  "value": "mask"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METADATA": {
          "type": "function",
          "refID": 462,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 462
                },
                "tagName": {
                  "type": "constant",
                  "value": "metadata"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MISSING_GLYPH": {
          "type": "function",
          "refID": 464,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 464
                },
                "tagName": {
                  "type": "constant",
                  "value": "missing-glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATH": {
          "type": "function",
          "refID": 466,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 466
                },
                "tagName": {
                  "type": "constant",
                  "value": "path"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATTERN": {
          "type": "function",
          "refID": 468,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 468
                },
                "tagName": {
                  "type": "constant",
                  "value": "pattern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYGON": {
          "type": "function",
          "refID": 470,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 470
                },
                "tagName": {
                  "type": "constant",
                  "value": "polygon"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYLINE": {
          "type": "function",
          "refID": 472,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 472
                },
                "tagName": {
                  "type": "constant",
                  "value": "polyline"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RADIALGRADIENT": {
          "type": "function",
          "refID": 474,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 474
                },
                "tagName": {
                  "type": "constant",
                  "value": "radialGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RECT": {
          "type": "function",
          "refID": 476,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 476
                },
                "tagName": {
                  "type": "constant",
                  "value": "rect"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SET": {
          "type": "function",
          "refID": 478,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 478
                },
                "tagName": {
                  "type": "constant",
                  "value": "set"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STOP": {
          "type": "function",
          "refID": 480,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 480
                },
                "tagName": {
                  "type": "constant",
                  "value": "stop"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SVG": {
          "type": "function",
          "refID": 482,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 482
                },
                "tagName": {
                  "type": "constant",
                  "value": "svg"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SWITCH": {
          "type": "function",
          "refID": 484,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 484
                },
                "tagName": {
                  "type": "constant",
                  "value": "switch"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SYMBOL": {
          "type": "function",
          "refID": 486,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 486
                },
                "tagName": {
                  "type": "constant",
                  "value": "symbol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXT": {
          "type": "function",
          "refID": 488,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 488
                },
                "tagName": {
                  "type": "constant",
                  "value": "text"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTPATH": {
          "type": "function",
          "refID": 490,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 490
                },
                "tagName": {
                  "type": "constant",
                  "value": "textPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TREF": {
          "type": "function",
          "refID": 492,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 492
                },
                "tagName": {
                  "type": "constant",
                  "value": "tref"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TSPAN": {
          "type": "function",
          "refID": 494,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 494
                },
                "tagName": {
                  "type": "constant",
                  "value": "tspan"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "USE": {
          "type": "function",
          "refID": 496,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 496
                },
                "tagName": {
                  "type": "constant",
                  "value": "use"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIEW": {
          "type": "function",
          "refID": 498,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 498
                },
                "tagName": {
                  "type": "constant",
                  "value": "view"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VKERN": {
          "type": "function",
          "refID": 500,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 500
                },
                "tagName": {
                  "type": "constant",
                  "value": "vkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CharRef": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 503
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 503
                }
              }
            }
          }
        },
        "Comment": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 506
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 506
                }
              }
            }
          }
        },
        "Raw": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 509
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 509
                }
              }
            }
          }
        },
        "isArray": {
          "type": "function"
        },
        "isConstructedObject": {
          "type": "function"
        },
        "isNully": {
          "type": "function"
        },
        "isValidAttributeName": {
          "type": "function"
        },
        "flattenAttributes": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "TEXTMODE": {
          "type": "object",
          "members": {
            "STRING": {
              "type": "constant",
              "value": 1
            },
            "RCDATA": {
              "type": "constant",
              "value": 2
            },
            "ATTRIBUTE": {
              "type": "constant",
              "value": 3
            }
          }
        },
        "toText": {
          "type": "function"
        }
      }
    }
  },
  "html-tools": {
    "HTMLTools": {
      "type": "object",
      "members": {
        "Parse": {
          "type": "object",
          "members": {
            "getCharacterReference": {
              "type": "function"
            },
            "getComment": {
              "type": "function"
            },
            "getDoctype": {
              "type": "function"
            },
            "getHTMLToken": {
              "type": "function"
            },
            "getTagToken": {
              "type": "function"
            },
            "getContent": {
              "type": "function"
            },
            "getRCData": {
              "type": "function"
            }
          }
        },
        "asciiLowerCase": {
          "type": "function"
        },
        "properCaseTagName": {
          "type": "function"
        },
        "properCaseAttributeName": {
          "type": "function"
        },
        "Scanner": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rest": {
                  "type": "function"
                },
                "isEOF": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "peek": {
                  "type": "function"
                }
              }
            }
          }
        },
        "TEMPLATE_TAG_POSITION": {
          "type": "object",
          "members": {
            "ELEMENT": {
              "type": "constant",
              "value": 1
            },
            "IN_START_TAG": {
              "type": "constant",
              "value": 2
            },
            "IN_ATTRIBUTE": {
              "type": "constant",
              "value": 3
            },
            "IN_RCDATA": {
              "type": "constant",
              "value": 4
            },
            "IN_RAWTEXT": {
              "type": "constant",
              "value": 5
            }
          }
        },
        "TemplateTag": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "HTMLTools.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parseFragment": {
          "type": "function"
        },
        "codePointToString": {
          "type": "function"
        }
      }
    }
  },
  "blaze-tools": {
    "BlazeTools": {
      "type": "object",
      "members": {
        "parseNumber": {
          "type": "function"
        },
        "parseIdentifierName": {
          "type": "function"
        },
        "parseExtendedIdentifierName": {
          "type": "function"
        },
        "parseStringLiteral": {
          "type": "function"
        },
        "EmitCode": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJSLiteral": {
          "type": "function"
        },
        "toObjectLiteralKey": {
          "type": "function"
        },
        "ToJSVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function"
            },
            "def": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "generateCall": {
                  "type": "function"
                },
                "generateAttrsDictionary": {
                  "type": "function"
                },
                "visit": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJS": {
          "type": "function"
        }
      }
    }
  },
  "spacebars-compiler": {
    "SpacebarsCompiler": {
      "type": "object",
      "members": {
        "TemplateTag": {
          "type": "function",
          "members": {
            "parse": {
              "type": "function"
            },
            "peek": {
              "type": "function"
            },
            "parseCompleteTag": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "SpacebarsCompiler.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "optimize": {
          "type": "function"
        },
        "CodeGen": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "codeGenTemplateTag": {
                  "type": "function"
                },
                "codeGenPath": {
                  "type": "function"
                },
                "codeGenArgValue": {
                  "type": "function"
                },
                "codeGenMustache": {
                  "type": "function"
                },
                "codeGenMustacheArgs": {
                  "type": "function"
                },
                "codeGenBlock": {
                  "type": "function"
                },
                "codeGenInclusionData": {
                  "type": "function"
                },
                "codeGenInclusionDataFunc": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isReservedName": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "codeGen": {
          "type": "function"
        }
      }
    }
  },
  "jquery": {},
  "observe-sequence": {
    "ObserveSequence": {
      "type": "object",
      "members": {
        "observe": {
          "type": "function"
        },
        "fetch": {
          "type": "function"
        }
      }
    }
  },
  "reactive-var": {
    "ReactiveVar": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "toString": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "blaze": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "removeViewDestroyedListener": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 35
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "Let": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 53
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 35
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 53
            },
            "body": {
              "type": "object",
              "members": {
                "viewName": {
                  "type": "constant",
                  "value": "body"
                },
                "renderFunction": {
                  "type": "function"
                },
                "contentViews": {
                  "type": "array"
                },
                "view": {
                  "type": "null",
                  "value": null
                },
                "addContent": {
                  "type": "function"
                },
                "renderToDocument": {
                  "type": "function"
                },
                "onCreated": {
                  "type": "function",
                  "refID": 68
                },
                "onRendered": {
                  "type": "function",
                  "refID": 70
                },
                "onDestroyed": {
                  "type": "function",
                  "refID": 72
                },
                "constructView": {
                  "type": "function",
                  "refID": 74
                },
                "helpers": {
                  "type": "function",
                  "refID": 76
                },
                "events": {
                  "type": "function",
                  "refID": 78
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "ref": 68
                },
                "onRendered": {
                  "ref": 70
                },
                "onDestroyed": {
                  "ref": 72
                },
                "constructView": {
                  "ref": 74
                },
                "helpers": {
                  "ref": 76
                },
                "events": {
                  "ref": 78
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "removeViewDestroyedListener": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 35
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "Let": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 53
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 35
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 53
            },
            "body": {
              "type": "object",
              "members": {
                "viewName": {
                  "type": "constant",
                  "value": "body"
                },
                "renderFunction": {
                  "type": "function"
                },
                "contentViews": {
                  "type": "array"
                },
                "view": {
                  "type": "null",
                  "value": null
                },
                "addContent": {
                  "type": "function"
                },
                "renderToDocument": {
                  "type": "function"
                },
                "onCreated": {
                  "type": "function",
                  "refID": 68
                },
                "onRendered": {
                  "type": "function",
                  "refID": 70
                },
                "onDestroyed": {
                  "type": "function",
                  "refID": 72
                },
                "constructView": {
                  "type": "function",
                  "refID": 74
                },
                "helpers": {
                  "type": "function",
                  "refID": 76
                },
                "events": {
                  "type": "function",
                  "refID": 78
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "ref": 68
                },
                "onRendered": {
                  "ref": 70
                },
                "onDestroyed": {
                  "ref": 72
                },
                "constructView": {
                  "ref": 74
                },
                "helpers": {
                  "ref": 76
                },
                "events": {
                  "ref": 78
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "spacebars": {
    "Spacebars": {
      "type": "object",
      "members": {
        "include": {
          "type": "function"
        },
        "mustacheImpl": {
          "type": "function"
        },
        "mustache": {
          "type": "function"
        },
        "attrMustache": {
          "type": "function"
        },
        "dataMustache": {
          "type": "function"
        },
        "makeRaw": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "kw": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "dot": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "TemplateWith": {
          "type": "function"
        }
      }
    }
  },
  "ui": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "removeViewDestroyedListener": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 35
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "Let": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 53
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 35
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 53
            },
            "body": {
              "type": "object",
              "members": {
                "viewName": {
                  "type": "constant",
                  "value": "body"
                },
                "renderFunction": {
                  "type": "function"
                },
                "contentViews": {
                  "type": "array"
                },
                "view": {
                  "type": "null",
                  "value": null
                },
                "addContent": {
                  "type": "function"
                },
                "renderToDocument": {
                  "type": "function"
                },
                "onCreated": {
                  "type": "function",
                  "refID": 68
                },
                "onRendered": {
                  "type": "function",
                  "refID": 70
                },
                "onDestroyed": {
                  "type": "function",
                  "refID": 72
                },
                "constructView": {
                  "type": "function",
                  "refID": 74
                },
                "helpers": {
                  "type": "function",
                  "refID": 76
                },
                "events": {
                  "type": "function",
                  "refID": 78
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "ref": 68
                },
                "onRendered": {
                  "ref": 70
                },
                "onDestroyed": {
                  "ref": 72
                },
                "constructView": {
                  "ref": 74
                },
                "helpers": {
                  "ref": 76
                },
                "events": {
                  "ref": 78
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "removeViewDestroyedListener": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 35
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "Let": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 53
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 35
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 53
            },
            "body": {
              "type": "object",
              "members": {
                "viewName": {
                  "type": "constant",
                  "value": "body"
                },
                "renderFunction": {
                  "type": "function"
                },
                "contentViews": {
                  "type": "array"
                },
                "view": {
                  "type": "null",
                  "value": null
                },
                "addContent": {
                  "type": "function"
                },
                "renderToDocument": {
                  "type": "function"
                },
                "onCreated": {
                  "type": "function",
                  "refID": 68
                },
                "onRendered": {
                  "type": "function",
                  "refID": 70
                },
                "onDestroyed": {
                  "type": "function",
                  "refID": 72
                },
                "constructView": {
                  "type": "function",
                  "refID": 74
                },
                "helpers": {
                  "type": "function",
                  "refID": 76
                },
                "events": {
                  "type": "function",
                  "refID": 78
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "ref": 68
                },
                "onRendered": {
                  "ref": 70
                },
                "onDestroyed": {
                  "ref": 72
                },
                "constructView": {
                  "ref": 74
                },
                "helpers": {
                  "ref": 76
                },
                "events": {
                  "ref": 78
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "boilerplate-generator": {
    "Boilerplate": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "toHTML": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "webapp-hashing": {
    "WebAppHashing": {
      "type": "object",
      "members": {
        "calculateClientHash": {
          "type": "function"
        }
      }
    }
  },
  "webapp": {
    "WebApp": {
      "type": "object",
      "members": {
        "defaultArch": {
          "type": "constant",
          "value": "web.browser"
        },
        "clientPrograms": {
          "type": "object",
          "members": {
            "web.browser": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "74a5814dc1cbb067ecfc420f9c549d4131344a91"
                },
                "PUBLIC_SETTINGS": {
                  "type": "object",
                  "members": {
                    "analyticsSettings": {
                      "type": "object",
                      "members": {
                        "Google Analytics": {
                          "type": "object",
                          "members": {
                            "trackingId": {
                              "type": "constant",
                              "value": "UA-63151429-1"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "categorizeRequest": {
          "type": "function"
        },
        "addHtmlAttributeHook": {
          "type": "function"
        },
        "connectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "type": "function",
              "refID": 12
            },
            "handle": {
              "type": "function",
              "refID": 14
            },
            "listen": {
              "type": "function",
              "refID": 16
            },
            "setMaxListeners": {
              "type": "function",
              "refID": 18
            },
            "emit": {
              "type": "function",
              "refID": 20
            },
            "addListener": {
              "type": "function",
              "refID": 22
            },
            "on": {
              "ref": 22
            },
            "once": {
              "type": "function",
              "refID": 24
            },
            "removeListener": {
              "type": "function",
              "refID": 26
            },
            "removeAllListeners": {
              "type": "function",
              "refID": 28
            },
            "listeners": {
              "type": "function",
              "refID": 30
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "rawConnectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "ref": 12
            },
            "handle": {
              "ref": 14
            },
            "listen": {
              "ref": 16
            },
            "setMaxListeners": {
              "ref": 18
            },
            "emit": {
              "ref": 20
            },
            "addListener": {
              "ref": 22
            },
            "on": {
              "ref": 22
            },
            "once": {
              "ref": 24
            },
            "removeListener": {
              "ref": 26
            },
            "removeAllListeners": {
              "ref": 28
            },
            "listeners": {
              "ref": 30
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "httpServer": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "connections": {
              "type": "constant",
              "value": 1
            },
            "timeout": {
              "type": "constant",
              "value": 5000
            },
            "setTimeout": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "address": {
              "type": "function"
            },
            "getConnections": {
              "type": "function"
            },
            "close": {
              "type": "function"
            },
            "listenFD": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "unref": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 18
            },
            "emit": {
              "ref": 20
            },
            "addListener": {
              "ref": 22
            },
            "on": {
              "ref": 22
            },
            "once": {
              "ref": 24
            },
            "removeListener": {
              "ref": 26
            },
            "removeAllListeners": {
              "ref": 28
            },
            "listeners": {
              "ref": 30
            }
          }
        },
        "suppressConnectErrors": {
          "type": "function"
        },
        "onListening": {
          "type": "function"
        },
        "clientHash": {
          "type": "function"
        },
        "calculateClientHashRefreshable": {
          "type": "function"
        },
        "calculateClientHashNonRefreshable": {
          "type": "function"
        },
        "calculateClientHashCordova": {
          "type": "function"
        }
      }
    },
    "main": {
      "type": "function"
    }
  },
  "audit-argument-checks": {},
  "ordered-dict": {
    "OrderedDict": {
      "type": "function",
      "members": {
        "BREAK": {
          "type": "object"
        },
        "prototype": {
          "type": "object",
          "members": {
            "empty": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "putBefore": {
              "type": "function"
            },
            "append": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "first": {
              "type": "function"
            },
            "firstValue": {
              "type": "function"
            },
            "last": {
              "type": "function"
            },
            "lastValue": {
              "type": "function"
            },
            "prev": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "moveBefore": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "geojson-utils": {
    "GeoJSON": {
      "type": "object",
      "members": {
        "lineStringsIntersect": {
          "type": "function"
        },
        "pointInBoundingBox": {
          "type": "function"
        },
        "pointInPolygon": {
          "type": "function"
        },
        "numberToRadius": {
          "type": "function"
        },
        "numberToDegree": {
          "type": "function"
        },
        "drawCircle": {
          "type": "function"
        },
        "rectangleCentroid": {
          "type": "function"
        },
        "pointDistance": {
          "type": "function"
        },
        "geometryWithinRadius": {
          "type": "function"
        },
        "area": {
          "type": "function"
        },
        "centroid": {
          "type": "function"
        },
        "simplify": {
          "type": "function"
        },
        "destinationPoint": {
          "type": "function"
        }
      }
    }
  },
  "minimongo": {
    "LocalCollection": {
      "type": "function",
      "members": {
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rewind": {
                  "type": "function"
                },
                "forEach": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObserveHandle": {
          "type": "function"
        },
        "wrapTransform": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "saveOriginals": {
              "type": "function"
            },
            "retrieveOriginals": {
              "type": "function"
            },
            "pauseObservers": {
              "type": "function"
            },
            "resumeObservers": {
              "type": "function"
            },
            "simpleSchema": {
              "type": "function"
            }
          }
        }
      }
    },
    "Minimongo": {
      "type": "object",
      "members": {
        "Matcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "documentMatches": {
                  "type": "function"
                },
                "hasGeoQuery": {
                  "type": "function"
                },
                "hasWhere": {
                  "type": "function"
                },
                "isSimple": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "canBecomeTrueByModifier": {
                  "type": "function"
                },
                "matchingDocument": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Sorter": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getComparator": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "MinimongoTest": {
      "type": "object",
      "members": {
        "makeLookupFunction": {
          "type": "function"
        }
      }
    }
  },
  "babel-runtime": {
    "babelHelpers": {
      "type": "object",
      "members": {
        "sanitizeForInObject": {
          "type": "function"
        },
        "taggedTemplateLiteralLoose": {
          "type": "function"
        },
        "classCallCheck": {
          "type": "function"
        },
        "inherits": {
          "type": "function"
        },
        "createClass": {
          "type": "function"
        },
        "objectWithoutProperties": {
          "type": "function"
        },
        "objectDestructuringEmpty": {
          "type": "function"
        },
        "bind": {
          "type": "function"
        },
        "slice": {
          "type": "function"
        }
      }
    }
  },
  "promise": {
    "Promise": {
      "type": "function",
      "members": {
        "resolve": {
          "type": "function"
        },
        "all": {
          "type": "function"
        },
        "reject": {
          "type": "function"
        },
        "race": {
          "type": "function"
        },
        "denodeify": {
          "type": "function"
        },
        "nodeify": {
          "type": "function"
        },
        "awaitAll": {
          "type": "function"
        },
        "await": {
          "type": "function"
        },
        "async": {
          "type": "function"
        },
        "asyncApply": {
          "type": "function"
        },
        "Fiber": {
          "type": "function",
          "members": {
            "yield": {
              "type": "function"
            },
            "poolSize": {
              "type": "constant",
              "value": 120
            },
            "fibersCreated": {
              "type": "constant",
              "value": 12
            },
            "prototype": {
              "type": "object",
              "members": {
                "started": {
                  "type": "undefined"
                },
                "reset": {
                  "type": "function"
                },
                "run": {
                  "type": "function"
                },
                "throwInto": {
                  "type": "function"
                }
              }
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "then": {
              "type": "function"
            },
            "done": {
              "type": "function"
            },
            "finally": {
              "type": "function"
            },
            "catch": {
              "type": "function"
            },
            "nodeify": {
              "type": "function"
            },
            "await": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ecmascript-collections": {
    "Map": {
      "type": "function"
    },
    "Set": {
      "type": "function"
    }
  },
  "ddp-server": {
    "DDPServer": {
      "type": "object"
    }
  },
  "ddp": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    }
  },
  "npm-mongo": {
    "NpmModuleMongodbVersion": {
      "type": "constant",
      "value": "1.4.39"
    }
  },
  "binary-heap": {
    "MaxHeap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "maxElementId": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinMaxHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "mongo": {
    "MongoTest": {
      "type": "object",
      "members": {
        "DocFetcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Mongo": {
      "type": "object",
      "members": {
        "Collection": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "refID": 2,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "refID": 20,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function"
                },
                "rawDatabase": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "attachSchema": {
                  "type": "function"
                },
                "simpleSchema": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObjectID": {
          "ref": 20
        },
        "Cursor": {
          "ref": 2
        }
      }
    }
  },
  "accounts-base": {
    "Accounts": {
      "type": "object",
      "members": {
        "connection": {
          "type": "undefined"
        },
        "users": {
          "type": "object",
          "members": {
            "constructor": {
              "type": "function",
              "refID": 2,
              "members": {
                "Cursor": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "rewind": {
                          "type": "function"
                        },
                        "forEach": {
                          "type": "function"
                        },
                        "getTransform": {
                          "type": "function"
                        },
                        "map": {
                          "type": "function"
                        },
                        "fetch": {
                          "type": "function"
                        },
                        "count": {
                          "type": "function"
                        },
                        "observe": {
                          "type": "function"
                        },
                        "observeChanges": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "ObjectID": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "toString": {
                          "type": "function"
                        },
                        "equals": {
                          "type": "function"
                        },
                        "clone": {
                          "type": "function"
                        },
                        "typeName": {
                          "type": "function"
                        },
                        "getTimestamp": {
                          "type": "function"
                        },
                        "toHexString": {
                          "type": "function",
                          "refID": 33
                        },
                        "toJSONValue": {
                          "ref": 33
                        },
                        "valueOf": {
                          "ref": 33
                        }
                      }
                    }
                  }
                },
                "get": {
                  "type": "function"
                },
                "getAll": {
                  "type": "function"
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 2
                    },
                    "find": {
                      "type": "function",
                      "refID": 40
                    },
                    "findOne": {
                      "type": "function",
                      "refID": 42
                    },
                    "insert": {
                      "type": "function",
                      "refID": 44
                    },
                    "update": {
                      "type": "function",
                      "refID": 46
                    },
                    "remove": {
                      "type": "function",
                      "refID": 48
                    },
                    "upsert": {
                      "type": "function",
                      "refID": 50
                    },
                    "rawCollection": {
                      "type": "function",
                      "refID": 52
                    },
                    "rawDatabase": {
                      "type": "function",
                      "refID": 54
                    },
                    "allow": {
                      "type": "function",
                      "refID": 56
                    },
                    "deny": {
                      "type": "function",
                      "refID": 58
                    },
                    "attachSchema": {
                      "type": "function",
                      "refID": 60
                    },
                    "simpleSchema": {
                      "type": "function",
                      "refID": 62
                    }
                  }
                }
              }
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "expireTokenInterval": {
          "type": "object",
          "members": {
            "unref": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "close": {
              "type": "function"
            }
          }
        },
        "emailTemplates": {
          "type": "object",
          "members": {
            "from": {
              "type": "constant",
              "value": "Meteor Accounts <no-reply@meteor.com>"
            },
            "siteName": {
              "type": "constant",
              "value": "localhost:3000"
            },
            "resetPassword": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                },
                "siteName": {
                  "type": "function"
                },
                "from": {
                  "type": "function"
                }
              }
            },
            "verifyEmail": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "enrollAccount": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            }
          }
        },
        "findUserByUsername": {
          "type": "function"
        },
        "findUserByEmail": {
          "type": "function"
        },
        "setUsername": {
          "type": "function"
        },
        "setPassword": {
          "type": "function"
        },
        "sendResetPasswordEmail": {
          "type": "function"
        },
        "sendEnrollmentEmail": {
          "type": "function"
        },
        "sendVerificationEmail": {
          "type": "function"
        },
        "addEmail": {
          "type": "function"
        },
        "removeEmail": {
          "type": "function"
        },
        "createUser": {
          "type": "function"
        },
        "oauth": {
          "type": "object",
          "members": {
            "registerService": {
              "type": "function"
            },
            "unregisterService": {
              "type": "function"
            },
            "serviceNames": {
              "type": "function"
            }
          }
        },
        "userId": {
          "type": "function"
        },
        "validateLoginAttempt": {
          "type": "function"
        },
        "validateNewUser": {
          "type": "function"
        },
        "onCreateUser": {
          "type": "function"
        },
        "registerLoginHandler": {
          "type": "function"
        },
        "destroyToken": {
          "type": "function"
        },
        "addAutopublishFields": {
          "type": "function"
        },
        "config": {
          "type": "function"
        },
        "insertUserDoc": {
          "type": "function"
        },
        "updateOrCreateUserFromExternalService": {
          "type": "function"
        },
        "urls": {
          "type": "object",
          "members": {
            "resetPassword": {
              "type": "function"
            },
            "verifyEmail": {
              "type": "function"
            },
            "enrollAccount": {
              "type": "function"
            }
          }
        },
        "user": {
          "type": "function"
        },
        "onLogin": {
          "type": "function"
        },
        "onLoginFailure": {
          "type": "function"
        },
        "LoginCancelledError": {
          "type": "function",
          "refID": 151,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "numericError": {
              "type": "constant",
              "value": 145546287
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 151
                },
                "name": {
                  "type": "constant",
                  "value": "Accounts.LoginCancelledError"
                }
              }
            }
          }
        },
        "removeDefaultRateLimit": {
          "type": "function"
        },
        "addDefaultRateLimit": {
          "type": "function"
        },
        "loginServiceConfiguration": {
          "type": "object",
          "members": {
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    },
    "AccountsServer": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "userId": {
              "type": "function"
            },
            "validateLoginAttempt": {
              "type": "function"
            },
            "validateNewUser": {
              "type": "function"
            },
            "onCreateUser": {
              "type": "function"
            },
            "registerLoginHandler": {
              "type": "function"
            },
            "destroyToken": {
              "type": "function"
            },
            "addAutopublishFields": {
              "type": "function"
            },
            "config": {
              "type": "function"
            },
            "insertUserDoc": {
              "type": "function"
            },
            "updateOrCreateUserFromExternalService": {
              "type": "function"
            },
            "urls": {
              "type": "object",
              "members": {
                "resetPassword": {
                  "type": "function"
                },
                "verifyEmail": {
                  "type": "function"
                },
                "enrollAccount": {
                  "type": "function"
                }
              }
            },
            "user": {
              "type": "function"
            },
            "onLogin": {
              "type": "function"
            },
            "onLoginFailure": {
              "type": "function"
            },
            "LoginCancelledError": {
              "type": "function",
              "refID": 35,
              "members": {
                "captureStackTrace": {
                  "type": "function"
                },
                "stackTraceLimit": {
                  "type": "constant",
                  "value": 10
                },
                "prepareStackTrace": {
                  "type": "function"
                },
                "numericError": {
                  "type": "constant",
                  "value": 145546287
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 35
                    },
                    "name": {
                      "type": "constant",
                      "value": "Accounts.LoginCancelledError"
                    }
                  }
                }
              }
            },
            "removeDefaultRateLimit": {
              "type": "function"
            },
            "addDefaultRateLimit": {
              "type": "function"
            },
            "loginServiceConfiguration": {
              "type": "object",
              "members": {
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function"
                },
                "rawDatabase": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "attachSchema": {
                  "type": "function"
                },
                "simpleSchema": {
                  "type": "function"
                }
              }
            },
            "ConfigError": {
              "type": "function"
            }
          }
        }
      }
    },
    "AccountsTest": {
      "type": "undefined"
    }
  },
  "sha": {
    "SHA256": {
      "type": "function"
    }
  },
  "srp": {
    "SRP": {
      "type": "object",
      "members": {
        "generateVerifier": {
          "type": "function"
        },
        "matchVerifier": {
          "type": "object",
          "members": {
            "identity": {
              "type": "function",
              "refID": 4
            },
            "salt": {
              "ref": 4
            },
            "verifier": {
              "ref": 4
            }
          }
        }
      }
    }
  },
  "email": {
    "Email": {
      "type": "object",
      "members": {
        "send": {
          "type": "function"
        }
      }
    },
    "EmailInternals": {
      "type": "object",
      "members": {
        "NpmModules": {
          "type": "object",
          "members": {
            "mailcomposer": {
              "type": "object",
              "members": {
                "version": {
                  "type": "constant",
                  "value": "0.1.15"
                },
                "module": {
                  "type": "object",
                  "members": {
                    "MailComposer": {
                      "type": "function",
                      "members": {
                        "super_": {
                          "type": "function",
                          "refID": 5,
                          "members": {
                            "super_": {
                              "type": "function",
                              "members": {
                                "listenerCount": {
                                  "type": "function"
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "setMaxListeners": {
                                      "type": "function",
                                      "refID": 10
                                    },
                                    "emit": {
                                      "type": "function",
                                      "refID": 12
                                    },
                                    "addListener": {
                                      "type": "function",
                                      "refID": 14
                                    },
                                    "on": {
                                      "ref": 14
                                    },
                                    "once": {
                                      "type": "function",
                                      "refID": 16
                                    },
                                    "removeListener": {
                                      "type": "function",
                                      "refID": 18
                                    },
                                    "removeAllListeners": {
                                      "type": "function",
                                      "refID": 20
                                    },
                                    "listeners": {
                                      "type": "function",
                                      "refID": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Readable": {
                              "type": "function",
                              "refID": 24,
                              "members": {
                                "ReadableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 5
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 28
                                    },
                                    "unshift": {
                                      "type": "function",
                                      "refID": 30
                                    },
                                    "setEncoding": {
                                      "type": "function",
                                      "refID": 32
                                    },
                                    "read": {
                                      "type": "function",
                                      "refID": 34
                                    },
                                    "pipe": {
                                      "type": "function",
                                      "refID": 36
                                    },
                                    "unpipe": {
                                      "type": "function",
                                      "refID": 38
                                    },
                                    "on": {
                                      "type": "function",
                                      "refID": 40
                                    },
                                    "addListener": {
                                      "ref": 40
                                    },
                                    "resume": {
                                      "type": "function",
                                      "refID": 42
                                    },
                                    "pause": {
                                      "type": "function",
                                      "refID": 44
                                    },
                                    "wrap": {
                                      "type": "function",
                                      "refID": 46
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Writable": {
                              "type": "function",
                              "members": {
                                "WritableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 5
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "pipe": {
                                      "type": "function"
                                    },
                                    "write": {
                                      "type": "function",
                                      "refID": 54
                                    },
                                    "end": {
                                      "type": "function",
                                      "refID": 56
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "addListener": {
                                      "ref": 14
                                    },
                                    "on": {
                                      "ref": 14
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Duplex": {
                              "type": "function",
                              "refID": 58,
                              "members": {
                                "super_": {
                                  "ref": 24
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "write": {
                                      "ref": 54
                                    },
                                    "end": {
                                      "ref": 56
                                    },
                                    "push": {
                                      "ref": 28
                                    },
                                    "unshift": {
                                      "ref": 30
                                    },
                                    "setEncoding": {
                                      "ref": 32
                                    },
                                    "read": {
                                      "ref": 34
                                    },
                                    "pipe": {
                                      "ref": 36
                                    },
                                    "unpipe": {
                                      "ref": 38
                                    },
                                    "on": {
                                      "ref": 40
                                    },
                                    "addListener": {
                                      "ref": 40
                                    },
                                    "resume": {
                                      "ref": 42
                                    },
                                    "pause": {
                                      "ref": 44
                                    },
                                    "wrap": {
                                      "ref": 46
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Transform": {
                              "type": "function",
                              "refID": 60,
                              "members": {
                                "super_": {
                                  "ref": 58
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 62
                                    },
                                    "write": {
                                      "ref": 54
                                    },
                                    "end": {
                                      "ref": 56
                                    },
                                    "unshift": {
                                      "ref": 30
                                    },
                                    "setEncoding": {
                                      "ref": 32
                                    },
                                    "read": {
                                      "ref": 34
                                    },
                                    "pipe": {
                                      "ref": 36
                                    },
                                    "unpipe": {
                                      "ref": 38
                                    },
                                    "on": {
                                      "ref": 40
                                    },
                                    "addListener": {
                                      "ref": 40
                                    },
                                    "resume": {
                                      "ref": 42
                                    },
                                    "pause": {
                                      "ref": 44
                                    },
                                    "wrap": {
                                      "ref": 46
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "PassThrough": {
                              "type": "function",
                              "members": {
                                "super_": {
                                  "ref": 60
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "ref": 62
                                    },
                                    "write": {
                                      "ref": 54
                                    },
                                    "end": {
                                      "ref": 56
                                    },
                                    "unshift": {
                                      "ref": 30
                                    },
                                    "setEncoding": {
                                      "ref": 32
                                    },
                                    "read": {
                                      "ref": 34
                                    },
                                    "pipe": {
                                      "ref": 36
                                    },
                                    "unpipe": {
                                      "ref": 38
                                    },
                                    "on": {
                                      "ref": 40
                                    },
                                    "addListener": {
                                      "ref": 40
                                    },
                                    "resume": {
                                      "ref": 42
                                    },
                                    "pause": {
                                      "ref": 44
                                    },
                                    "wrap": {
                                      "ref": 46
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Stream": {
                              "ref": 5
                            },
                            "prototype": {
                              "type": "object",
                              "members": {
                                "pipe": {
                                  "type": "function",
                                  "refID": 67
                                },
                                "setMaxListeners": {
                                  "ref": 10
                                },
                                "emit": {
                                  "ref": 12
                                },
                                "addListener": {
                                  "ref": 14
                                },
                                "on": {
                                  "ref": 14
                                },
                                "once": {
                                  "ref": 16
                                },
                                "removeListener": {
                                  "ref": 18
                                },
                                "removeAllListeners": {
                                  "ref": 20
                                },
                                "listeners": {
                                  "ref": 22
                                }
                              }
                            }
                          }
                        },
                        "prototype": {
                          "type": "object",
                          "members": {
                            "addHeader": {
                              "type": "function"
                            },
                            "setMessageOption": {
                              "type": "function"
                            },
                            "useDKIM": {
                              "type": "function"
                            },
                            "addAttachment": {
                              "type": "function"
                            },
                            "getEnvelope": {
                              "type": "function"
                            },
                            "streamMessage": {
                              "type": "function"
                            },
                            "compileHeaders": {
                              "type": "function"
                            },
                            "pipe": {
                              "ref": 67
                            },
                            "setMaxListeners": {
                              "ref": 10
                            },
                            "emit": {
                              "ref": 12
                            },
                            "addListener": {
                              "ref": 14
                            },
                            "on": {
                              "ref": 14
                            },
                            "once": {
                              "ref": 16
                            },
                            "removeListener": {
                              "ref": 18
                            },
                            "removeAllListeners": {
                              "ref": 20
                            },
                            "listeners": {
                              "ref": 22
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "EmailTest": {
      "type": "object",
      "members": {
        "overrideOutputStream": {
          "type": "function"
        },
        "restoreOutputStream": {
          "type": "function"
        },
        "hookSend": {
          "type": "function"
        }
      }
    }
  },
  "accounts-password": {},
  "themeteorchef:jquery-validation": {},
  "twbs:bootstrap": {},
  "meteorhacks:npm": {},
  "themeteorchef:bert": {
    "Bert": {
      "type": "undefined"
    }
  },
  "meteorhacks:ssr": {
    "Template": {
      "type": "function",
      "members": {
        "instance": {
          "type": "function"
        },
        "currentData": {
          "type": "function"
        },
        "parentData": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function"
        },
        "body": {
          "type": "object",
          "members": {
            "viewName": {
              "type": "constant",
              "value": "body"
            },
            "renderFunction": {
              "type": "function"
            },
            "contentViews": {
              "type": "array"
            },
            "view": {
              "type": "null",
              "value": null
            },
            "addContent": {
              "type": "function"
            },
            "renderToDocument": {
              "type": "function"
            },
            "onCreated": {
              "type": "function",
              "refID": 17
            },
            "onRendered": {
              "type": "function",
              "refID": 19
            },
            "onDestroyed": {
              "type": "function",
              "refID": 21
            },
            "constructView": {
              "type": "function",
              "refID": 23
            },
            "helpers": {
              "type": "function",
              "refID": 25
            },
            "events": {
              "type": "function",
              "refID": 27
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "onCreated": {
              "ref": 17
            },
            "onRendered": {
              "ref": 19
            },
            "onDestroyed": {
              "ref": 21
            },
            "constructView": {
              "ref": 23
            },
            "helpers": {
              "ref": 25
            },
            "events": {
              "ref": 27
            }
          }
        }
      }
    },
    "SSR": {
      "type": "object",
      "members": {
        "render": {
          "type": "function"
        },
        "compileTemplate": {
          "type": "function"
        }
      }
    }
  },
  "standard-minifiers": {},
  "npm-container": {},
  "coffeescript": {},
  "digilord:faker": {
    "faker": {
      "type": "object",
      "members": {
        "locales": {
          "type": "object",
          "members": {
            "de": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "legal_form": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "nobility_title_prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "de_AT": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German (Austria)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "legal_form": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "nobility_title_prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "de_CH": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German (Switzerland)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country_code": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "English"
                },
                "separator": {
                  "type": "constant",
                  "value": " & "
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "county": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "country_code": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "postcode_by_state": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "credit_card": {
                  "type": "object",
                  "members": {
                    "visa": {
                      "type": "array"
                    },
                    "mastercard": {
                      "type": "array"
                    },
                    "discover": {
                      "type": "array"
                    },
                    "american_express": {
                      "type": "array"
                    },
                    "diners_club": {
                      "type": "array"
                    },
                    "jcb": {
                      "type": "array"
                    },
                    "switch": {
                      "type": "array"
                    },
                    "solo": {
                      "type": "array"
                    },
                    "maestro": {
                      "type": "array"
                    },
                    "laser": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    },
                    "avatar_uri": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "business": {
                  "type": "object",
                  "members": {
                    "credit_card_numbers": {
                      "type": "array"
                    },
                    "credit_card_expiry_dates": {
                      "type": "array"
                    },
                    "credit_card_types": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "team": {
                  "type": "object",
                  "members": {
                    "creature": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "hacker": {
                  "type": "object",
                  "members": {
                    "abbreviation": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "verb": {
                      "type": "array"
                    },
                    "ingverb": {
                      "type": "array"
                    }
                  }
                },
                "app": {
                  "type": "object",
                  "members": {
                    "name": {
                      "type": "array"
                    },
                    "version": {
                      "type": "array"
                    },
                    "author": {
                      "type": "array"
                    }
                  }
                },
                "finance": {
                  "type": "object",
                  "members": {
                    "account_type": {
                      "type": "array"
                    },
                    "transaction_type": {
                      "type": "array"
                    },
                    "currency": {
                      "type": "object",
                      "members": {
                        "UAE Dirham": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AED"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Afghani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AFN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "؋"
                            }
                          }
                        },
                        "Lek": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ALL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Lek"
                            }
                          }
                        },
                        "Armenian Dram": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Netherlands Antillian Guilder": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ANG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ƒ"
                            }
                          }
                        },
                        "Kwanza": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AOA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Argentine Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ARS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Australian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AUD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Aruban Guilder": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AWG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ƒ"
                            }
                          }
                        },
                        "Azerbaijanian Manat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AZN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ман"
                            }
                          }
                        },
                        "Convertible Marks": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BAM"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "KM"
                            }
                          }
                        },
                        "Barbados Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Taka": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BDT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bulgarian Lev": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BGN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Bahraini Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BHD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Burundi Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BIF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bermudian Dollar (customarily known as Bermuda Dollar)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Brunei Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Boliviano Mvdol": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BOB BOV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$b"
                            }
                          }
                        },
                        "Brazilian Real": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BRL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "R$"
                            }
                          }
                        },
                        "Bahamian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BSD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Pula": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BWP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "P"
                            }
                          }
                        },
                        "Belarussian Ruble": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BYR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "p."
                            }
                          }
                        },
                        "Belize Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "BZ$"
                            }
                          }
                        },
                        "Canadian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Congolese Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CDF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Swiss Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CHF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "CHF"
                            }
                          }
                        },
                        "Chilean Peso Unidades de fomento": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CLP CLF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Yuan Renminbi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CNY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "¥"
                            }
                          }
                        },
                        "Colombian Peso Unidad de Valor Real": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "COP COU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Costa Rican Colon": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CRC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₡"
                            }
                          }
                        },
                        "Cuban Peso Peso Convertible": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CUP CUC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₱"
                            }
                          }
                        },
                        "Cape Verde Escudo": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CVE"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Czech Koruna": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CZK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Kč"
                            }
                          }
                        },
                        "Djibouti Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DJF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Danish Krone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DKK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Dominican Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "RD$"
                            }
                          }
                        },
                        "Algerian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Kroon": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EEK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Egyptian Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EGP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Nakfa": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ERN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Ethiopian Birr": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ETB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Euro": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EUR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "€"
                            }
                          }
                        },
                        "Fiji Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "FJD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Falkland Islands Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "FKP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Pound Sterling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GBP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Lari": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GEL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Cedi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GHS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Gibraltar Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GIP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Dalasi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Guinea Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GNF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Quetzal": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GTQ"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Q"
                            }
                          }
                        },
                        "Guyana Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Hong Kong Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HKD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Lempira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HNL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "L"
                            }
                          }
                        },
                        "Croatian Kuna": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HRK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kn"
                            }
                          }
                        },
                        "Gourde US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HTG USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Forint": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HUF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Ft"
                            }
                          }
                        },
                        "Rupiah": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IDR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Rp"
                            }
                          }
                        },
                        "New Israeli Sheqel": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ILS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₪"
                            }
                          }
                        },
                        "Indian Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "INR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Indian Rupee Ngultrum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "INR BTN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Iraqi Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IQD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Iranian Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IRR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Iceland Krona": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ISK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Jamaican Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "J$"
                            }
                          }
                        },
                        "Jordanian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JOD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Yen": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JPY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "¥"
                            }
                          }
                        },
                        "Kenyan Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KES"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Som": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KGS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Riel": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KHR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "៛"
                            }
                          }
                        },
                        "Comoro Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KMF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "North Korean Won": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KPW"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₩"
                            }
                          }
                        },
                        "Won": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KRW"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₩"
                            }
                          }
                        },
                        "Kuwaiti Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KWD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Cayman Islands Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Tenge": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KZT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Kip": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LAK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₭"
                            }
                          }
                        },
                        "Lebanese Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LBP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Sri Lanka Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LKR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Liberian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LRD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Lithuanian Litas": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LTL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Lt"
                            }
                          }
                        },
                        "Latvian Lats": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LVL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Ls"
                            }
                          }
                        },
                        "Libyan Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Moroccan Dirham": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Moldovan Leu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MDL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Malagasy Ariary": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MGA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Denar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MKD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ден"
                            }
                          }
                        },
                        "Kyat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MMK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tugrik": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MNT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₮"
                            }
                          }
                        },
                        "Pataca": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Ouguiya": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MRO"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Mauritius Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MUR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Rufiyaa": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MVR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Kwacha": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MWK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Mexican Peso Mexican Unidad de Inversion (UDI)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MXN MXV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Malaysian Ringgit": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MYR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "RM"
                            }
                          }
                        },
                        "Metical": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MZN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "MT"
                            }
                          }
                        },
                        "Naira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NGN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₦"
                            }
                          }
                        },
                        "Cordoba Oro": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NIO"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "C$"
                            }
                          }
                        },
                        "Norwegian Krone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NOK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Nepalese Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NPR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "New Zealand Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Rial Omani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "OMR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Balboa US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PAB USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "B/."
                            }
                          }
                        },
                        "Nuevo Sol": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PEN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "S/."
                            }
                          }
                        },
                        "Kina": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PGK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Philippine Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PHP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Php"
                            }
                          }
                        },
                        "Pakistan Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PKR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Zloty": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PLN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "zł"
                            }
                          }
                        },
                        "Guarani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PYG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Gs"
                            }
                          }
                        },
                        "Qatari Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "QAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "New Leu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RON"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "lei"
                            }
                          }
                        },
                        "Serbian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RSD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Дин."
                            }
                          }
                        },
                        "Russian Ruble": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RUB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "руб"
                            }
                          }
                        },
                        "Rwanda Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RWF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Saudi Riyal": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Solomon Islands Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Seychelles Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SCR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Sudanese Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SDG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Swedish Krona": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SEK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Singapore Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SGD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Saint Helena Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SHP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Leone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SLL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Somali Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SOS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "S"
                            }
                          }
                        },
                        "Surinam Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SRD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Dobra": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "STD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "El Salvador Colon US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SVC USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Syrian Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SYP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Lilangeni": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SZL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Baht": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "THB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "฿"
                            }
                          }
                        },
                        "Somoni": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TJS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Manat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TMT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tunisian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Pa'anga": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Turkish Lira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TRY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "TL"
                            }
                          }
                        },
                        "Trinidad and Tobago Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TTD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "TT$"
                            }
                          }
                        },
                        "New Taiwan Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TWD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "NT$"
                            }
                          }
                        },
                        "Tanzanian Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TZS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Hryvnia": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UAH"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₴"
                            }
                          }
                        },
                        "Uganda Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UGX"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Peso Uruguayo Uruguay Peso en Unidades Indexadas": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UYU UYI"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$U"
                            }
                          }
                        },
                        "Uzbekistan Sum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UZS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Bolivar Fuerte": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VEF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Bs"
                            }
                          }
                        },
                        "Dong": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₫"
                            }
                          }
                        },
                        "Vatu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VUV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tala": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "WST"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFA Franc BEAC": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Silver": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Gold": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bond Markets Units European Composite Unit (EURCO)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Monetary Unit (E.M.U.-6)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Unit of Account 9(E.U.A.-9)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Unit of Account 17(E.U.A.-17)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "East Caribbean Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XCD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "SDR": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XDR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "UIC-Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XFU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFA Franc BCEAO": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XOF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Palladium": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFP Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Platinum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Codes specifically reserved for testing purposes": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XTS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Yemeni Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "YER"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Rand": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "R"
                            }
                          }
                        },
                        "Rand Loti": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR LSL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Rand Namibia Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR NAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Zambian Kwacha": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZMK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Zimbabwe Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZWL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "en_AU": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Australia (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "state_abbr": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_BORK": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Bork (English)"
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_CA": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Canada (English)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_GB": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Great Britain (English)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "county": {
                      "type": "array"
                    },
                    "uk_country": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_IE": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Ireland (English)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "county": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_IND": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "India (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_US": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "United States (English)"
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "default_country": {
                      "type": "array"
                    },
                    "postcode_by_state": {
                      "type": "object",
                      "members": {
                        "AL": {
                          "type": "constant",
                          "value": "350##"
                        },
                        "AK": {
                          "type": "constant",
                          "value": "995##"
                        },
                        "AS": {
                          "type": "constant",
                          "value": "967##"
                        },
                        "AZ": {
                          "type": "constant",
                          "value": "850##"
                        },
                        "AR": {
                          "type": "constant",
                          "value": "717##"
                        },
                        "CA": {
                          "type": "constant",
                          "value": "900##"
                        },
                        "CO": {
                          "type": "constant",
                          "value": "800##"
                        },
                        "CT": {
                          "type": "constant",
                          "value": "061##"
                        },
                        "DC": {
                          "type": "constant",
                          "value": "204##"
                        },
                        "DE": {
                          "type": "constant",
                          "value": "198##"
                        },
                        "FL": {
                          "type": "constant",
                          "value": "322##"
                        },
                        "GA": {
                          "type": "constant",
                          "value": "301##"
                        },
                        "HI": {
                          "type": "constant",
                          "value": "967##"
                        },
                        "ID": {
                          "type": "constant",
                          "value": "832##"
                        },
                        "IL": {
                          "type": "constant",
                          "value": "600##"
                        },
                        "IN": {
                          "type": "constant",
                          "value": "463##"
                        },
                        "IA": {
                          "type": "constant",
                          "value": "510##"
                        },
                        "KS": {
                          "type": "constant",
                          "value": "666##"
                        },
                        "KY": {
                          "type": "constant",
                          "value": "404##"
                        },
                        "LA": {
                          "type": "constant",
                          "value": "701##"
                        },
                        "ME": {
                          "type": "constant",
                          "value": "042##"
                        },
                        "MD": {
                          "type": "constant",
                          "value": "210##"
                        },
                        "MA": {
                          "type": "constant",
                          "value": "026##"
                        },
                        "MI": {
                          "type": "constant",
                          "value": "480##"
                        },
                        "MN": {
                          "type": "constant",
                          "value": "555##"
                        },
                        "MS": {
                          "type": "constant",
                          "value": "387##"
                        },
                        "MO": {
                          "type": "constant",
                          "value": "650##"
                        },
                        "MT": {
                          "type": "constant",
                          "value": "590##"
                        },
                        "NE": {
                          "type": "constant",
                          "value": "688##"
                        },
                        "NV": {
                          "type": "constant",
                          "value": "898##"
                        },
                        "NH": {
                          "type": "constant",
                          "value": "036##"
                        },
                        "NJ": {
                          "type": "constant",
                          "value": "076##"
                        },
                        "NM": {
                          "type": "constant",
                          "value": "880##"
                        },
                        "NY": {
                          "type": "constant",
                          "value": "122##"
                        },
                        "NC": {
                          "type": "constant",
                          "value": "288##"
                        },
                        "ND": {
                          "type": "constant",
                          "value": "586##"
                        },
                        "OH": {
                          "type": "constant",
                          "value": "444##"
                        },
                        "OK": {
                          "type": "constant",
                          "value": "730##"
                        },
                        "OR": {
                          "type": "constant",
                          "value": "979##"
                        },
                        "PA": {
                          "type": "constant",
                          "value": "186##"
                        },
                        "RI": {
                          "type": "constant",
                          "value": "029##"
                        },
                        "SC": {
                          "type": "constant",
                          "value": "299##"
                        },
                        "SD": {
                          "type": "constant",
                          "value": "577##"
                        },
                        "TN": {
                          "type": "constant",
                          "value": "383##"
                        },
                        "TX": {
                          "type": "constant",
                          "value": "798##"
                        },
                        "UT": {
                          "type": "constant",
                          "value": "847##"
                        },
                        "VT": {
                          "type": "constant",
                          "value": "050##"
                        },
                        "VA": {
                          "type": "constant",
                          "value": "222##"
                        },
                        "WA": {
                          "type": "constant",
                          "value": "990##"
                        },
                        "WV": {
                          "type": "constant",
                          "value": "247##"
                        },
                        "WI": {
                          "type": "constant",
                          "value": "549##"
                        },
                        "WY": {
                          "type": "constant",
                          "value": "831##"
                        }
                      }
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "area_code": {
                      "type": "array"
                    },
                    "exchange_code": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_au_ocker": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Australia Ocker (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "ocker_first_name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "street_root": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "city_prefix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "region": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "es": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Spanish"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "province": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "fa": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Farsi"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "fr": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "French"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "building_number": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "fr_CA": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Canada (French)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ge": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Georgian"
                },
                "separator": {
                  "type": "constant",
                  "value": " და "
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "street_title": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "it": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Italian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ja": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Japanese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "last_name": {
                      "type": "array"
                    },
                    "first_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ko": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Korean"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "last_name": {
                      "type": "array"
                    },
                    "first_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nb_NO": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Norwegian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_root": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "common_street_suffix": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "feminine_name": {
                      "type": "array"
                    },
                    "masculine_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nep": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Nepalese"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nl": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Dutch"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "tussenvoegsel": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "pl": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Polish"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjetive": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "pt_BR": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Portuguese (Brazil)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ru": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Russian"
                },
                "separator": {
                  "type": "constant",
                  "value": " и "
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "street_title": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "male_first_name": {
                      "type": "array"
                    },
                    "male_middle_name": {
                      "type": "array"
                    },
                    "male_last_name": {
                      "type": "array"
                    },
                    "female_first_name": {
                      "type": "array"
                    },
                    "female_middle_name": {
                      "type": "array"
                    },
                    "female_last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "sk": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Slovakian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "man_first_name": {
                      "type": "array"
                    },
                    "woman_first_name": {
                      "type": "array"
                    },
                    "man_last_name": {
                      "type": "array"
                    },
                    "woman_last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "sv": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Swedish"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "common_street_suffix": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name_women": {
                      "type": "array"
                    },
                    "first_name_men": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "common_cell_prefix": {
                      "type": "array"
                    },
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "team": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "tr": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Turkish"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "area_code": {
                      "type": "array"
                    },
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "uk": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Ukrainian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "street_title": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "male_first_name": {
                      "type": "array"
                    },
                    "male_middle_name": {
                      "type": "array"
                    },
                    "male_last_name": {
                      "type": "array"
                    },
                    "female_first_name": {
                      "type": "array"
                    },
                    "female_middle_name": {
                      "type": "array"
                    },
                    "female_last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "vi": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Vietnamese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_root": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "county": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "zh_CN": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Chinese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "zh_TW": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Chinese (Taiwan)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            }
          }
        },
        "locale": {
          "type": "constant",
          "value": "en"
        },
        "localeFallback": {
          "type": "constant",
          "value": "en"
        },
        "definitions": {
          "type": "object",
          "members": {
            "name": {
              "type": "object"
            },
            "address": {
              "type": "object"
            },
            "company": {
              "type": "object"
            },
            "lorem": {
              "type": "object"
            },
            "hacker": {
              "type": "object"
            },
            "phone_number": {
              "type": "object"
            },
            "finance": {
              "type": "object"
            },
            "internet": {
              "type": "object"
            },
            "commerce": {
              "type": "object"
            },
            "title": {
              "type": "constant",
              "value": ""
            },
            "separator": {
              "type": "constant",
              "value": ""
            }
          }
        },
        "fake": {
          "type": "function"
        },
        "random": {
          "type": "object",
          "members": {
            "number": {
              "type": "function"
            },
            "arrayElement": {
              "type": "function"
            },
            "objectElement": {
              "type": "function"
            },
            "uuid": {
              "type": "function"
            },
            "boolean": {
              "type": "function"
            }
          }
        },
        "helpers": {
          "type": "object",
          "members": {
            "randomize": {
              "type": "function"
            },
            "slugify": {
              "type": "function"
            },
            "replaceSymbolWithNumber": {
              "type": "function"
            },
            "replaceSymbols": {
              "type": "function"
            },
            "shuffle": {
              "type": "function"
            },
            "mustache": {
              "type": "function"
            },
            "createCard": {
              "type": "function"
            },
            "contextualCard": {
              "type": "function"
            },
            "userCard": {
              "type": "function"
            },
            "createTransaction": {
              "type": "function"
            }
          }
        },
        "name": {
          "type": "object",
          "members": {
            "firstName": {
              "type": "function"
            },
            "lastName": {
              "type": "function"
            },
            "findName": {
              "type": "function"
            },
            "jobTitle": {
              "type": "function"
            },
            "prefix": {
              "type": "function"
            },
            "suffix": {
              "type": "function"
            },
            "title": {
              "type": "function"
            },
            "jobDescriptor": {
              "type": "function"
            },
            "jobArea": {
              "type": "function"
            },
            "jobType": {
              "type": "function"
            }
          }
        },
        "address": {
          "type": "object",
          "members": {
            "zipCode": {
              "type": "function"
            },
            "city": {
              "type": "function"
            },
            "cityPrefix": {
              "type": "function"
            },
            "citySuffix": {
              "type": "function"
            },
            "streetName": {
              "type": "function"
            },
            "streetAddress": {
              "type": "function"
            },
            "streetSuffix": {
              "type": "function"
            },
            "streetPrefix": {
              "type": "function"
            },
            "secondaryAddress": {
              "type": "function"
            },
            "county": {
              "type": "function"
            },
            "country": {
              "type": "function"
            },
            "countryCode": {
              "type": "function"
            },
            "state": {
              "type": "function"
            },
            "stateAbbr": {
              "type": "function"
            },
            "latitude": {
              "type": "function"
            },
            "longitude": {
              "type": "function"
            }
          }
        },
        "company": {
          "type": "object",
          "members": {
            "suffixes": {
              "type": "function"
            },
            "companyName": {
              "type": "function"
            },
            "companySuffix": {
              "type": "function"
            },
            "catchPhrase": {
              "type": "function"
            },
            "bs": {
              "type": "function"
            },
            "catchPhraseAdjective": {
              "type": "function"
            },
            "catchPhraseDescriptor": {
              "type": "function"
            },
            "catchPhraseNoun": {
              "type": "function"
            },
            "bsAdjective": {
              "type": "function"
            },
            "bsBuzz": {
              "type": "function"
            },
            "bsNoun": {
              "type": "function"
            }
          }
        },
        "finance": {
          "type": "object",
          "members": {
            "account": {
              "type": "function"
            },
            "accountName": {
              "type": "function"
            },
            "mask": {
              "type": "function"
            },
            "amount": {
              "type": "function"
            },
            "transactionType": {
              "type": "function"
            },
            "currencyCode": {
              "type": "function"
            },
            "currencyName": {
              "type": "function"
            },
            "currencySymbol": {
              "type": "function"
            }
          }
        },
        "image": {
          "type": "object",
          "members": {
            "image": {
              "type": "function"
            },
            "avatar": {
              "type": "function"
            },
            "imageUrl": {
              "type": "function"
            },
            "abstract": {
              "type": "function"
            },
            "animals": {
              "type": "function"
            },
            "business": {
              "type": "function"
            },
            "cats": {
              "type": "function"
            },
            "city": {
              "type": "function"
            },
            "food": {
              "type": "function"
            },
            "nightlife": {
              "type": "function"
            },
            "fashion": {
              "type": "function"
            },
            "people": {
              "type": "function"
            },
            "nature": {
              "type": "function"
            },
            "sports": {
              "type": "function"
            },
            "technics": {
              "type": "function"
            },
            "transport": {
              "type": "function"
            }
          }
        },
        "lorem": {
          "type": "object",
          "members": {
            "words": {
              "type": "function"
            },
            "sentence": {
              "type": "function"
            },
            "sentences": {
              "type": "function"
            },
            "paragraph": {
              "type": "function"
            },
            "paragraphs": {
              "type": "function"
            }
          }
        },
        "hacker": {
          "type": "object",
          "members": {
            "abbreviation": {
              "type": "function"
            },
            "adjective": {
              "type": "function"
            },
            "noun": {
              "type": "function"
            },
            "verb": {
              "type": "function"
            },
            "ingverb": {
              "type": "function"
            },
            "phrase": {
              "type": "function"
            }
          }
        },
        "internet": {
          "type": "object",
          "members": {
            "avatar": {
              "type": "function"
            },
            "email": {
              "type": "function"
            },
            "userName": {
              "type": "function"
            },
            "protocol": {
              "type": "function"
            },
            "url": {
              "type": "function"
            },
            "domainName": {
              "type": "function"
            },
            "domainSuffix": {
              "type": "function"
            },
            "domainWord": {
              "type": "function"
            },
            "ip": {
              "type": "function"
            },
            "userAgent": {
              "type": "function"
            },
            "color": {
              "type": "function"
            },
            "mac": {
              "type": "function"
            },
            "password": {
              "type": "function"
            }
          }
        },
        "phone": {
          "type": "object",
          "members": {
            "phoneNumber": {
              "type": "function"
            },
            "phoneNumberFormat": {
              "type": "function"
            },
            "phoneFormats": {
              "type": "function"
            }
          }
        },
        "date": {
          "type": "object",
          "members": {
            "past": {
              "type": "function"
            },
            "future": {
              "type": "function"
            },
            "between": {
              "type": "function"
            },
            "recent": {
              "type": "function"
            }
          }
        },
        "commerce": {
          "type": "object",
          "members": {
            "color": {
              "type": "function"
            },
            "department": {
              "type": "function"
            },
            "productName": {
              "type": "function"
            },
            "price": {
              "type": "function"
            },
            "productAdjective": {
              "type": "function"
            },
            "productMaterial": {
              "type": "function"
            },
            "product": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "reactive-dict": {
    "ReactiveDict": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "set": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "equals": {
              "type": "function"
            },
            "all": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "delete": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "meteorhacks:inject-data": {
    "InjectData": {
      "type": "object"
    }
  },
  "meteorhacks:picker": {
    "Picker": {
      "type": "object",
      "members": {
        "filterFunction": {
          "type": "undefined"
        },
        "routes": {
          "type": "array"
        },
        "subRouters": {
          "type": "array"
        },
        "middlewares": {
          "type": "array"
        },
        "middleware": {
          "type": "function"
        },
        "route": {
          "type": "function"
        },
        "filter": {
          "type": "function"
        }
      }
    }
  },
  "livedata": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "undefined"
    }
  },
  "meteorhacks:fast-render": {
    "FastRender": {
      "type": "object",
      "members": {
        "frContext": {
          "type": "object",
          "members": {
            "slot": {
              "type": "constant",
              "value": 3
            },
            "get": {
              "type": "function"
            },
            "getOrNullIfOutsideFiber": {
              "type": "function"
            },
            "withValue": {
              "type": "function"
            }
          }
        },
        "route": {
          "type": "function"
        },
        "handleRoute": {
          "type": "function"
        },
        "handleOnAllRoutes": {
          "type": "function"
        },
        "onAllRoutes": {
          "type": "function"
        }
      }
    }
  },
  "kadira:flow-router": {
    "FlowRouter": {
      "type": "object",
      "members": {
        "subscriptions": {
          "type": "function",
          "members": {
            "future": {
              "type": "function"
            },
            "async": {
              "type": "function"
            },
            "asyncApply": {
              "type": "function"
            }
          }
        },
        "Router": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "route": {
                  "type": "function",
                  "refID": 10
                },
                "group": {
                  "type": "function",
                  "refID": 12
                },
                "path": {
                  "type": "function",
                  "refID": 14
                },
                "onRouteRegister": {
                  "type": "function",
                  "refID": 16
                },
                "go": {
                  "type": "function",
                  "refID": 18
                },
                "current": {
                  "type": "function",
                  "refID": 20
                },
                "triggers": {
                  "type": "object",
                  "refID": 22,
                  "members": {
                    "enter": {
                      "type": "function"
                    },
                    "exit": {
                      "type": "function"
                    }
                  }
                },
                "middleware": {
                  "type": "function",
                  "refID": 27
                },
                "getState": {
                  "type": "function",
                  "refID": 29
                },
                "getAllStates": {
                  "type": "function",
                  "refID": 31
                },
                "setState": {
                  "type": "function",
                  "refID": 33
                },
                "removeState": {
                  "type": "function",
                  "refID": 35
                },
                "clearStates": {
                  "type": "function",
                  "refID": 37
                },
                "ready": {
                  "type": "function",
                  "refID": 39
                },
                "initialize": {
                  "type": "function",
                  "refID": 41
                },
                "wait": {
                  "type": "function",
                  "refID": 43
                }
              }
            }
          }
        },
        "Route": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "register": {
                  "type": "function"
                },
                "subscription": {
                  "type": "function"
                },
                "middleware": {
                  "type": "function"
                }
              }
            }
          }
        },
        "notFound": {
          "type": "object",
          "members": {
            "action": {
              "type": "function"
            }
          }
        },
        "route": {
          "ref": 10
        },
        "group": {
          "ref": 12
        },
        "path": {
          "ref": 14
        },
        "onRouteRegister": {
          "ref": 16
        },
        "go": {
          "ref": 18
        },
        "current": {
          "ref": 20
        },
        "triggers": {
          "ref": 22
        },
        "middleware": {
          "ref": 27
        },
        "getState": {
          "ref": 29
        },
        "getAllStates": {
          "ref": 31
        },
        "setState": {
          "ref": 33
        },
        "removeState": {
          "ref": 35
        },
        "clearStates": {
          "ref": 37
        },
        "ready": {
          "ref": 39
        },
        "initialize": {
          "ref": 41
        },
        "wait": {
          "ref": 43
        }
      }
    }
  },
  "templating": {},
  "kadira:blaze-layout": {
    "BlazeLayout": {
      "type": "undefined"
    }
  },
  "meteor-base": {},
  "session": {},
  "fourseven:scss": {},
  "aldeed:simple-schema": {
    "SimpleSchema": {
      "type": "function",
      "members": {
        "extendOptions": {
          "type": "function"
        },
        "RegEx": {
          "type": "object",
          "members": {
            "Email": {
              "type": "regexp"
            },
            "Domain": {
              "type": "regexp"
            },
            "WeakDomain": {
              "type": "regexp"
            },
            "IP": {
              "type": "regexp"
            },
            "IPv4": {
              "type": "regexp"
            },
            "IPv6": {
              "type": "regexp"
            },
            "Url": {
              "type": "regexp"
            },
            "Id": {
              "type": "regexp"
            },
            "ZipCode": {
              "type": "regexp"
            }
          }
        },
        "addValidator": {
          "type": "function"
        },
        "messages": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "condition": {
              "type": "function"
            },
            "namedContext": {
              "type": "function"
            },
            "validator": {
              "type": "function",
              "refID": 22
            },
            "addValidator": {
              "ref": 22
            },
            "pick": {
              "type": "function"
            },
            "clean": {
              "type": "function"
            },
            "schema": {
              "type": "function"
            },
            "getDefinition": {
              "type": "function"
            },
            "keyIsInBlackBox": {
              "type": "function"
            },
            "labels": {
              "type": "function"
            },
            "label": {
              "type": "function"
            },
            "messages": {
              "type": "function"
            },
            "messageForError": {
              "type": "function"
            },
            "allowsKey": {
              "type": "function"
            },
            "newContext": {
              "type": "function"
            },
            "objectKeys": {
              "type": "function"
            }
          }
        }
      }
    },
    "MongoObject": {
      "type": "function",
      "members": {
        "expandKey": {
          "type": "function"
        }
      }
    }
  },
  "aldeed:collection2": {},
  "aldeed:autoform": {},
  "service-configuration": {
    "ServiceConfiguration": {
      "type": "object",
      "members": {
        "configurations": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "rawCollection": {
              "type": "function"
            },
            "rawDatabase": {
              "type": "function"
            },
            "allow": {
              "type": "function"
            },
            "deny": {
              "type": "function"
            },
            "attachSchema": {
              "type": "function"
            },
            "simpleSchema": {
              "type": "function"
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    }
  },
  "localstorage": {},
  "url": {
    "URL": {
      "type": "object"
    }
  },
  "oauth": {
    "OAuth": {
      "type": "object",
      "members": {
        "registerService": {
          "type": "function"
        },
        "retrieveCredential": {
          "type": "function"
        },
        "sealSecret": {
          "type": "function"
        },
        "openSecret": {
          "type": "function"
        },
        "openSecrets": {
          "type": "function"
        }
      }
    },
    "OAuthTest": {
      "type": "object",
      "members": {
        "unregisterService": {
          "type": "function"
        },
        "middleware": {
          "type": "function"
        }
      }
    },
    "Oauth": {
      "type": "object",
      "members": {
        "registerService": {
          "type": "function"
        },
        "retrieveCredential": {
          "type": "function"
        },
        "sealSecret": {
          "type": "function"
        },
        "openSecret": {
          "type": "function"
        },
        "openSecrets": {
          "type": "function"
        }
      }
    }
  },
  "accounts-oauth": {},
  "oauth2": {},
  "http": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        }
      }
    },
    "HTTPInternals": {
      "type": "object",
      "members": {
        "NpmModules": {
          "type": "object",
          "members": {
            "request": {
              "type": "object",
              "members": {
                "version": {
                  "type": "constant",
                  "value": "2.53.0"
                },
                "module": {
                  "type": "function",
                  "members": {
                    "get": {
                      "type": "function"
                    },
                    "head": {
                      "type": "function"
                    },
                    "post": {
                      "type": "function"
                    },
                    "put": {
                      "type": "function"
                    },
                    "patch": {
                      "type": "function"
                    },
                    "del": {
                      "type": "function"
                    },
                    "jar": {
                      "type": "function"
                    },
                    "cookie": {
                      "type": "function"
                    },
                    "defaults": {
                      "type": "function"
                    },
                    "forever": {
                      "type": "function"
                    },
                    "Request": {
                      "type": "function",
                      "members": {
                        "super_": {
                          "type": "function",
                          "refID": 25,
                          "members": {
                            "super_": {
                              "type": "function",
                              "members": {
                                "listenerCount": {
                                  "type": "function"
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "setMaxListeners": {
                                      "type": "function",
                                      "refID": 30
                                    },
                                    "emit": {
                                      "type": "function",
                                      "refID": 32
                                    },
                                    "addListener": {
                                      "type": "function",
                                      "refID": 34
                                    },
                                    "on": {
                                      "ref": 34
                                    },
                                    "once": {
                                      "type": "function",
                                      "refID": 36
                                    },
                                    "removeListener": {
                                      "type": "function",
                                      "refID": 38
                                    },
                                    "removeAllListeners": {
                                      "type": "function",
                                      "refID": 40
                                    },
                                    "listeners": {
                                      "type": "function",
                                      "refID": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Readable": {
                              "type": "function",
                              "refID": 44,
                              "members": {
                                "ReadableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 25
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 48
                                    },
                                    "unshift": {
                                      "type": "function",
                                      "refID": 50
                                    },
                                    "setEncoding": {
                                      "type": "function",
                                      "refID": 52
                                    },
                                    "read": {
                                      "type": "function",
                                      "refID": 54
                                    },
                                    "pipe": {
                                      "type": "function",
                                      "refID": 56
                                    },
                                    "unpipe": {
                                      "type": "function",
                                      "refID": 58
                                    },
                                    "on": {
                                      "type": "function",
                                      "refID": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "type": "function",
                                      "refID": 62
                                    },
                                    "pause": {
                                      "type": "function",
                                      "refID": 64
                                    },
                                    "wrap": {
                                      "type": "function",
                                      "refID": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Writable": {
                              "type": "function",
                              "members": {
                                "WritableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 25
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "pipe": {
                                      "type": "function"
                                    },
                                    "write": {
                                      "type": "function",
                                      "refID": 74
                                    },
                                    "end": {
                                      "type": "function",
                                      "refID": 76
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "addListener": {
                                      "ref": 34
                                    },
                                    "on": {
                                      "ref": 34
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Duplex": {
                              "type": "function",
                              "refID": 78,
                              "members": {
                                "super_": {
                                  "ref": 44
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "push": {
                                      "ref": 48
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Transform": {
                              "type": "function",
                              "refID": 80,
                              "members": {
                                "super_": {
                                  "ref": 78
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 82
                                    },
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "PassThrough": {
                              "type": "function",
                              "members": {
                                "super_": {
                                  "ref": 80
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "ref": 82
                                    },
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Stream": {
                              "ref": 25
                            },
                            "prototype": {
                              "type": "object",
                              "members": {
                                "pipe": {
                                  "type": "function"
                                },
                                "setMaxListeners": {
                                  "ref": 30
                                },
                                "emit": {
                                  "ref": 32
                                },
                                "addListener": {
                                  "ref": 34
                                },
                                "on": {
                                  "ref": 34
                                },
                                "once": {
                                  "ref": 36
                                },
                                "removeListener": {
                                  "ref": 38
                                },
                                "removeAllListeners": {
                                  "ref": 40
                                },
                                "listeners": {
                                  "ref": 42
                                }
                              }
                            }
                          }
                        },
                        "debug": {
                          "type": "undefined"
                        },
                        "defaultProxyHeaderWhiteList": {
                          "type": "array"
                        },
                        "defaultProxyHeaderExclusiveList": {
                          "type": "array"
                        },
                        "prototype": {
                          "type": "object",
                          "members": {
                            "setupTunnel": {
                              "type": "function"
                            },
                            "init": {
                              "type": "function"
                            },
                            "getNewAgent": {
                              "type": "function"
                            },
                            "start": {
                              "type": "function"
                            },
                            "onRequestError": {
                              "type": "function"
                            },
                            "onRequestResponse": {
                              "type": "function"
                            },
                            "abort": {
                              "type": "function"
                            },
                            "pipeDest": {
                              "type": "function"
                            },
                            "qs": {
                              "type": "function"
                            },
                            "form": {
                              "type": "function"
                            },
                            "multipart": {
                              "type": "function"
                            },
                            "json": {
                              "type": "function"
                            },
                            "getHeader": {
                              "type": "function"
                            },
                            "auth": {
                              "type": "function"
                            },
                            "aws": {
                              "type": "function"
                            },
                            "httpSignature": {
                              "type": "function"
                            },
                            "hawk": {
                              "type": "function"
                            },
                            "oauth": {
                              "type": "function"
                            },
                            "jar": {
                              "type": "function"
                            },
                            "pipe": {
                              "type": "function"
                            },
                            "write": {
                              "type": "function"
                            },
                            "end": {
                              "type": "function"
                            },
                            "pause": {
                              "type": "function"
                            },
                            "resume": {
                              "type": "function"
                            },
                            "destroy": {
                              "type": "function"
                            },
                            "toJSON": {
                              "type": "function"
                            },
                            "setMaxListeners": {
                              "ref": 30
                            },
                            "emit": {
                              "ref": 32
                            },
                            "addListener": {
                              "ref": 34
                            },
                            "on": {
                              "ref": 34
                            },
                            "once": {
                              "ref": 36
                            },
                            "removeListener": {
                              "ref": 38
                            },
                            "removeAllListeners": {
                              "ref": 40
                            },
                            "listeners": {
                              "ref": 42
                            }
                          }
                        }
                      }
                    },
                    "initParams": {
                      "type": "function"
                    },
                    "debug": {
                      "type": "undefined"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "facebook": {
    "Facebook": {
      "type": "object",
      "members": {
        "retrieveCredential": {
          "type": "function"
        }
      }
    }
  },
  "accounts-facebook": {},
  "google": {
    "Google": {
      "type": "object",
      "members": {
        "whitelistedFields": {
          "type": "array"
        },
        "retrieveCredential": {
          "type": "function"
        }
      }
    }
  },
  "accounts-google": {},
  "oauth1": {
    "OAuth1Binding": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "prepareRequestToken": {
              "type": "function"
            },
            "prepareAccessToken": {
              "type": "function"
            },
            "call": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "post": {
              "type": "function"
            }
          }
        }
      }
    },
    "OAuth1Test": {
      "type": "undefined"
    }
  },
  "twitter": {
    "Twitter": {
      "type": "object",
      "members": {
        "whitelistedFields": {
          "type": "array"
        },
        "retrieveCredential": {
          "type": "function"
        }
      }
    }
  },
  "accounts-twitter": {},
  "edgee:slingshot": {
    "Slingshot": {
      "type": "object",
      "members": {
        "fileRestrictions": {
          "type": "function"
        },
        "getRestrictions": {
          "type": "function"
        },
        "Validators": {
          "type": "object",
          "members": {
            "checkAll": {
              "type": "function"
            },
            "checkFileSize": {
              "type": "function"
            },
            "checkFileType": {
              "type": "function"
            }
          }
        },
        "createDirective": {
          "type": "function"
        },
        "getDirective": {
          "type": "function"
        },
        "Directive": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getInstructions": {
                  "type": "function"
                },
                "requestAuthorization": {
                  "type": "function"
                }
              }
            }
          }
        },
        "StoragePolicy": {
          "type": "function"
        },
        "S3Storage": {
          "type": "object",
          "members": {
            "accessId": {
              "type": "constant",
              "value": "AWSAccessKeyId"
            },
            "secretKey": {
              "type": "constant",
              "value": "AWSSecretAccessKey"
            },
            "directiveMatch": {
              "type": "object",
              "members": {
                "bucket": {
                  "type": "function",
                  "refID": 26
                },
                "bucketUrl": {
                  "type": "object",
                  "refID": 27,
                  "members": {
                    "choices": {
                      "type": "array"
                    }
                  }
                },
                "region": {
                  "type": "object",
                  "refID": 29,
                  "members": {
                    "condition": {
                      "type": "function"
                    }
                  }
                },
                "AWSAccessKeyId": {
                  "ref": 26
                },
                "AWSSecretAccessKey": {
                  "ref": 26
                },
                "acl": {
                  "type": "object",
                  "refID": 32,
                  "members": {
                    "pattern": {
                      "type": "object",
                      "members": {
                        "condition": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "key": {
                  "type": "object",
                  "refID": 36,
                  "members": {
                    "choices": {
                      "type": "array"
                    }
                  }
                },
                "expire": {
                  "type": "object",
                  "refID": 38,
                  "members": {
                    "condition": {
                      "type": "function"
                    }
                  }
                },
                "cacheControl": {
                  "type": "object",
                  "refID": 41,
                  "members": {
                    "pattern": {
                      "ref": 26
                    }
                  }
                },
                "contentDisposition": {
                  "type": "object",
                  "refID": 42,
                  "members": {
                    "pattern": {
                      "type": "object",
                      "members": {
                        "choices": {
                          "type": "array"
                        }
                      }
                    }
                  }
                }
              }
            },
            "directiveDefault": {
              "type": "object",
              "members": {
                "AWSAccessKeyId": {
                  "type": "constant",
                  "value": "AKIAIFKF7WSPFRS2LUAQ"
                },
                "AWSSecretAccessKey": {
                  "type": "constant",
                  "value": "XY26MEDs4LBr1NC9BHUKg+5nNgFnOtemYUH49r5b"
                },
                "bucket": {
                  "type": "undefined"
                },
                "bucketUrl": {
                  "type": "function",
                  "refID": 46
                },
                "region": {
                  "type": "constant",
                  "value": "us-east-1"
                },
                "expire": {
                  "type": "constant",
                  "value": 300000
                }
              }
            },
            "getContentDisposition": {
              "type": "function",
              "refID": 48
            },
            "upload": {
              "type": "function",
              "refID": 50
            },
            "applySignature": {
              "type": "function"
            },
            "signAwsV4": {
              "type": "function",
              "refID": 54
            },
            "TempCredentials": {
              "type": "object",
              "refID": 56,
              "members": {
                "directiveMatch": {
                  "type": "object",
                  "members": {
                    "bucket": {
                      "ref": 26
                    },
                    "bucketUrl": {
                      "ref": 27
                    },
                    "region": {
                      "ref": 29
                    },
                    "acl": {
                      "ref": 32
                    },
                    "key": {
                      "ref": 36
                    },
                    "expire": {
                      "ref": 38
                    },
                    "cacheControl": {
                      "ref": 41
                    },
                    "contentDisposition": {
                      "ref": 42
                    },
                    "temporaryCredentials": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "function",
                          "members": {
                            "future": {
                              "type": "function"
                            },
                            "async": {
                              "type": "function"
                            },
                            "asyncApply": {
                              "type": "function"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "directiveDefault": {
                  "type": "object",
                  "members": {
                    "bucket": {
                      "type": "undefined"
                    },
                    "bucketUrl": {
                      "ref": 46
                    },
                    "region": {
                      "type": "constant",
                      "value": "us-east-1"
                    },
                    "expire": {
                      "type": "constant",
                      "value": 300000
                    }
                  }
                },
                "applySignature": {
                  "type": "function"
                },
                "accessId": {
                  "type": "constant",
                  "value": "AWSAccessKeyId"
                },
                "secretKey": {
                  "type": "constant",
                  "value": "AWSSecretAccessKey"
                },
                "getContentDisposition": {
                  "ref": 48
                },
                "upload": {
                  "ref": 50
                },
                "signAwsV4": {
                  "ref": 54
                }
              }
            }
          }
        },
        "GoogleCloud": {
          "type": "object",
          "members": {
            "accessId": {
              "type": "constant",
              "value": "GoogleAccessId"
            },
            "secretKey": {
              "type": "constant",
              "value": "GoogleSecretKey"
            },
            "directiveMatch": {
              "type": "object",
              "members": {
                "bucket": {
                  "ref": 26
                },
                "bucketUrl": {
                  "ref": 27
                },
                "acl": {
                  "type": "object",
                  "members": {
                    "pattern": {
                      "type": "object",
                      "members": {
                        "condition": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "key": {
                  "ref": 36
                },
                "expire": {
                  "ref": 38
                },
                "cacheControl": {
                  "ref": 41
                },
                "contentDisposition": {
                  "ref": 42
                },
                "GoogleAccessId": {
                  "ref": 26
                },
                "GoogleSecretKey": {
                  "ref": 26
                }
              }
            },
            "directiveDefault": {
              "type": "object",
              "members": {
                "bucket": {
                  "type": "undefined"
                },
                "bucketUrl": {
                  "type": "function"
                },
                "expire": {
                  "type": "constant",
                  "value": 300000
                }
              }
            },
            "applySignature": {
              "type": "function"
            },
            "sign": {
              "type": "function"
            },
            "getContentDisposition": {
              "ref": 48
            },
            "upload": {
              "ref": 50
            },
            "signAwsV4": {
              "ref": 54
            },
            "TempCredentials": {
              "ref": 56
            }
          }
        },
        "RackspaceFiles": {
          "type": "object",
          "members": {
            "directiveMatch": {
              "type": "object",
              "members": {
                "RackspaceAccountId": {
                  "ref": 26
                },
                "RackspaceMetaDataKey": {
                  "ref": 26
                },
                "container": {
                  "ref": 26
                },
                "region": {
                  "ref": 26
                },
                "pathPrefix": {
                  "type": "object",
                  "members": {
                    "choices": {
                      "type": "array"
                    }
                  }
                },
                "expire": {
                  "type": "object",
                  "members": {
                    "condition": {
                      "type": "function"
                    }
                  }
                },
                "deleteAt": {
                  "type": "object",
                  "members": {
                    "pattern": {
                      "type": "function"
                    }
                  }
                },
                "deleteAfter": {
                  "type": "object",
                  "members": {
                    "pattern": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "directiveDefault": {
              "type": "object",
              "members": {
                "region": {
                  "type": "constant",
                  "value": "iad3"
                },
                "expire": {
                  "type": "constant",
                  "value": 300000
                }
              }
            },
            "version": {
              "type": "constant",
              "value": "v1"
            },
            "path": {
              "type": "function"
            },
            "pathPrefix": {
              "type": "function"
            },
            "host": {
              "type": "function"
            },
            "maxSize": {
              "type": "constant",
              "value": 5368709120
            },
            "upload": {
              "type": "function"
            },
            "sign": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "fortawesome:fontawesome": {},
  "aldeed:autoform-bs-datetimepicker": {},
  "tsega:bootstrap3-datetimepicker": {},
  "mrt:moment-timezone": {},
  "rajit:bootstrap3-datepicker": {},
  "aldeed:autoform-bs-datepicker": {},
  "browser-policy-common": {
    "BrowserPolicy": {
      "type": "object",
      "members": {
        "content": {
          "type": "object",
          "members": {
            "allowContentTypeSniffing": {
              "type": "function"
            },
            "setPolicy": {
              "type": "function"
            },
            "allowInlineScripts": {
              "type": "function"
            },
            "disallowInlineScripts": {
              "type": "function"
            },
            "allowEval": {
              "type": "function"
            },
            "disallowEval": {
              "type": "function"
            },
            "allowInlineStyles": {
              "type": "function"
            },
            "disallowInlineStyles": {
              "type": "function"
            },
            "allowSameOriginForAll": {
              "type": "function"
            },
            "allowDataUrlForAll": {
              "type": "function"
            },
            "allowOriginForAll": {
              "type": "function"
            },
            "disallowAll": {
              "type": "function"
            },
            "allowScriptOrigin": {
              "type": "function"
            },
            "disallowScript": {
              "type": "function"
            },
            "allowScriptDataUrl": {
              "type": "function"
            },
            "allowScriptSameOrigin": {
              "type": "function"
            },
            "allowObjectOrigin": {
              "type": "function"
            },
            "disallowObject": {
              "type": "function"
            },
            "allowObjectDataUrl": {
              "type": "function"
            },
            "allowObjectSameOrigin": {
              "type": "function"
            },
            "allowImageOrigin": {
              "type": "function"
            },
            "disallowImage": {
              "type": "function"
            },
            "allowImageDataUrl": {
              "type": "function"
            },
            "allowImageSameOrigin": {
              "type": "function"
            },
            "allowMediaOrigin": {
              "type": "function"
            },
            "disallowMedia": {
              "type": "function"
            },
            "allowMediaDataUrl": {
              "type": "function"
            },
            "allowMediaSameOrigin": {
              "type": "function"
            },
            "allowFontOrigin": {
              "type": "function"
            },
            "disallowFont": {
              "type": "function"
            },
            "allowFontDataUrl": {
              "type": "function"
            },
            "allowFontSameOrigin": {
              "type": "function"
            },
            "allowConnectOrigin": {
              "type": "function"
            },
            "disallowConnect": {
              "type": "function"
            },
            "allowConnectDataUrl": {
              "type": "function"
            },
            "allowConnectSameOrigin": {
              "type": "function"
            },
            "allowStyleOrigin": {
              "type": "function"
            },
            "disallowStyle": {
              "type": "function"
            },
            "allowStyleDataUrl": {
              "type": "function"
            },
            "allowStyleSameOrigin": {
              "type": "function"
            },
            "allowFrameOrigin": {
              "type": "function"
            },
            "disallowFrame": {
              "type": "function"
            },
            "allowFrameDataUrl": {
              "type": "function"
            },
            "allowFrameSameOrigin": {
              "type": "function"
            }
          }
        },
        "framing": {
          "type": "object",
          "members": {
            "disallow": {
              "type": "function"
            },
            "restrictToOrigin": {
              "type": "function"
            },
            "allowAll": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "browser-policy-content": {},
  "browser-policy-framing": {},
  "browser-policy": {},
  "lai:collection-extensions": {},
  "dburles:mongo-collection-instances": {},
  "meteortoys:toykit": {
    "MeteorToysData": {
      "type": "object",
      "members": {
        "Impersonate": {
          "type": "object",
          "members": {
            "constructor": {
              "type": "function",
              "refID": 2,
              "members": {
                "Cursor": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "rewind": {
                          "type": "function"
                        },
                        "forEach": {
                          "type": "function"
                        },
                        "getTransform": {
                          "type": "function"
                        },
                        "map": {
                          "type": "function"
                        },
                        "fetch": {
                          "type": "function"
                        },
                        "count": {
                          "type": "function"
                        },
                        "observe": {
                          "type": "function"
                        },
                        "observeChanges": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "ObjectID": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "toString": {
                          "type": "function"
                        },
                        "equals": {
                          "type": "function"
                        },
                        "clone": {
                          "type": "function"
                        },
                        "typeName": {
                          "type": "function"
                        },
                        "getTimestamp": {
                          "type": "function"
                        },
                        "toHexString": {
                          "type": "function",
                          "refID": 33
                        },
                        "toJSONValue": {
                          "ref": 33
                        },
                        "valueOf": {
                          "ref": 33
                        }
                      }
                    }
                  }
                },
                "get": {
                  "type": "function"
                },
                "getAll": {
                  "type": "function"
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 2
                    },
                    "find": {
                      "type": "function",
                      "refID": 40
                    },
                    "findOne": {
                      "type": "function",
                      "refID": 42
                    },
                    "insert": {
                      "type": "function",
                      "refID": 44
                    },
                    "update": {
                      "type": "function",
                      "refID": 46
                    },
                    "remove": {
                      "type": "function",
                      "refID": 48
                    },
                    "upsert": {
                      "type": "function",
                      "refID": 50
                    },
                    "rawCollection": {
                      "type": "function",
                      "refID": 52
                    },
                    "rawDatabase": {
                      "type": "function",
                      "refID": 54
                    },
                    "allow": {
                      "type": "function",
                      "refID": 56
                    },
                    "deny": {
                      "type": "function",
                      "refID": 58
                    },
                    "attachSchema": {
                      "type": "function",
                      "refID": 60
                    },
                    "simpleSchema": {
                      "type": "function",
                      "refID": 62
                    }
                  }
                }
              }
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "JetSetter": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 2
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "Mongol": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 2
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "AutoPub": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 2
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "Email": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 2
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "Result": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 2
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "Throttle": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 2
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        },
        "credentials": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 2
            },
            "find": {
              "ref": 40
            },
            "findOne": {
              "ref": 42
            },
            "insert": {
              "ref": 44
            },
            "update": {
              "ref": 46
            },
            "remove": {
              "ref": 48
            },
            "upsert": {
              "ref": 50
            },
            "rawCollection": {
              "ref": 52
            },
            "rawDatabase": {
              "ref": 54
            },
            "allow": {
              "ref": 56
            },
            "deny": {
              "ref": 58
            },
            "attachSchema": {
              "ref": 60
            },
            "simpleSchema": {
              "ref": 62
            }
          }
        }
      }
    }
  },
  "msavin:mongol": {},
  "dburles:google-maps": {},
  "jeremy:geocomplete": {},
  "peppelg:bootstrap-3-modal": {},
  "underscorestring:underscore.string": {
    "s": {
      "type": "function",
      "members": {
        "VERSION": {
          "type": "constant",
          "value": "3.2.1"
        },
        "isBlank": {
          "type": "function"
        },
        "stripTags": {
          "type": "function"
        },
        "capitalize": {
          "type": "function"
        },
        "decapitalize": {
          "type": "function"
        },
        "chop": {
          "type": "function"
        },
        "trim": {
          "type": "function",
          "refID": 11
        },
        "clean": {
          "type": "function"
        },
        "cleanDiacritics": {
          "type": "function"
        },
        "count": {
          "type": "function"
        },
        "chars": {
          "type": "function"
        },
        "swapCase": {
          "type": "function"
        },
        "escapeHTML": {
          "type": "function"
        },
        "unescapeHTML": {
          "type": "function"
        },
        "splice": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "replaceAll": {
          "type": "function"
        },
        "include": {
          "type": "function",
          "refID": 33
        },
        "join": {
          "type": "function"
        },
        "lines": {
          "type": "function"
        },
        "dedent": {
          "type": "function"
        },
        "reverse": {
          "type": "function"
        },
        "startsWith": {
          "type": "function"
        },
        "endsWith": {
          "type": "function"
        },
        "pred": {
          "type": "function"
        },
        "succ": {
          "type": "function"
        },
        "titleize": {
          "type": "function"
        },
        "camelize": {
          "type": "function",
          "refID": 53
        },
        "underscored": {
          "type": "function"
        },
        "dasherize": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "humanize": {
          "type": "function"
        },
        "ltrim": {
          "type": "function",
          "refID": 63
        },
        "rtrim": {
          "type": "function",
          "refID": 65
        },
        "truncate": {
          "type": "function"
        },
        "prune": {
          "type": "function"
        },
        "words": {
          "type": "function"
        },
        "pad": {
          "type": "function"
        },
        "lpad": {
          "type": "function",
          "refID": 75
        },
        "rpad": {
          "type": "function",
          "refID": 77
        },
        "lrpad": {
          "type": "function",
          "refID": 79
        },
        "sprintf": {
          "type": "function",
          "members": {
            "format": {
              "type": "function"
            },
            "cache": {
              "type": "object"
            },
            "parse": {
              "type": "function"
            }
          }
        },
        "vsprintf": {
          "type": "function"
        },
        "toNumber": {
          "type": "function"
        },
        "numberFormat": {
          "type": "function"
        },
        "strRight": {
          "type": "function"
        },
        "strRightBack": {
          "type": "function"
        },
        "strLeft": {
          "type": "function"
        },
        "strLeftBack": {
          "type": "function"
        },
        "toSentence": {
          "type": "function"
        },
        "toSentenceSerial": {
          "type": "function"
        },
        "slugify": {
          "type": "function"
        },
        "surround": {
          "type": "function"
        },
        "quote": {
          "type": "function",
          "refID": 110
        },
        "unquote": {
          "type": "function"
        },
        "repeat": {
          "type": "function"
        },
        "naturalCmp": {
          "type": "function"
        },
        "levenshtein": {
          "type": "function"
        },
        "toBoolean": {
          "type": "function",
          "refID": 120
        },
        "exports": {
          "type": "function"
        },
        "escapeRegExp": {
          "type": "function"
        },
        "wrap": {
          "type": "function"
        },
        "strip": {
          "ref": 11
        },
        "lstrip": {
          "ref": 63
        },
        "rstrip": {
          "ref": 65
        },
        "center": {
          "ref": 79
        },
        "rjust": {
          "ref": 75
        },
        "ljust": {
          "ref": 77
        },
        "contains": {
          "ref": 33
        },
        "q": {
          "ref": 110
        },
        "toBool": {
          "ref": 120
        },
        "camelcase": {
          "ref": 53
        },
        "prototype": {
          "type": "object",
          "members": {
            "value": {
              "type": "function"
            },
            "isBlank": {
              "type": "function"
            },
            "stripTags": {
              "type": "function"
            },
            "capitalize": {
              "type": "function"
            },
            "decapitalize": {
              "type": "function"
            },
            "chop": {
              "type": "function"
            },
            "trim": {
              "type": "function"
            },
            "clean": {
              "type": "function"
            },
            "cleanDiacritics": {
              "type": "function"
            },
            "count": {
              "type": "function"
            },
            "chars": {
              "type": "function"
            },
            "swapCase": {
              "type": "function"
            },
            "escapeHTML": {
              "type": "function"
            },
            "unescapeHTML": {
              "type": "function"
            },
            "splice": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "replaceAll": {
              "type": "function"
            },
            "include": {
              "type": "function"
            },
            "join": {
              "type": "function"
            },
            "lines": {
              "type": "function"
            },
            "dedent": {
              "type": "function"
            },
            "reverse": {
              "type": "function"
            },
            "startsWith": {
              "type": "function"
            },
            "endsWith": {
              "type": "function"
            },
            "pred": {
              "type": "function"
            },
            "succ": {
              "type": "function"
            },
            "titleize": {
              "type": "function"
            },
            "camelize": {
              "type": "function"
            },
            "underscored": {
              "type": "function"
            },
            "dasherize": {
              "type": "function"
            },
            "classify": {
              "type": "function"
            },
            "humanize": {
              "type": "function"
            },
            "ltrim": {
              "type": "function"
            },
            "rtrim": {
              "type": "function"
            },
            "truncate": {
              "type": "function"
            },
            "prune": {
              "type": "function"
            },
            "words": {
              "type": "function"
            },
            "pad": {
              "type": "function"
            },
            "lpad": {
              "type": "function"
            },
            "rpad": {
              "type": "function"
            },
            "lrpad": {
              "type": "function"
            },
            "sprintf": {
              "type": "function"
            },
            "vsprintf": {
              "type": "function"
            },
            "toNumber": {
              "type": "function"
            },
            "numberFormat": {
              "type": "function"
            },
            "strRight": {
              "type": "function"
            },
            "strRightBack": {
              "type": "function"
            },
            "strLeft": {
              "type": "function"
            },
            "strLeftBack": {
              "type": "function"
            },
            "toSentence": {
              "type": "function"
            },
            "toSentenceSerial": {
              "type": "function"
            },
            "slugify": {
              "type": "function"
            },
            "surround": {
              "type": "function"
            },
            "quote": {
              "type": "function"
            },
            "unquote": {
              "type": "function"
            },
            "repeat": {
              "type": "function"
            },
            "naturalCmp": {
              "type": "function"
            },
            "levenshtein": {
              "type": "function"
            },
            "toBoolean": {
              "type": "function"
            },
            "exports": {
              "type": "function"
            },
            "escapeRegExp": {
              "type": "function"
            },
            "wrap": {
              "type": "function"
            },
            "strip": {
              "type": "function"
            },
            "lstrip": {
              "type": "function"
            },
            "rstrip": {
              "type": "function"
            },
            "center": {
              "type": "function"
            },
            "rjust": {
              "type": "function"
            },
            "ljust": {
              "type": "function"
            },
            "contains": {
              "type": "function"
            },
            "q": {
              "type": "function"
            },
            "toBool": {
              "type": "function"
            },
            "camelcase": {
              "type": "function"
            },
            "future": {
              "type": "function"
            },
            "async": {
              "type": "function"
            },
            "asyncApply": {
              "type": "function"
            },
            "tap": {
              "type": "function"
            },
            "toUpperCase": {
              "type": "function"
            },
            "toLowerCase": {
              "type": "function"
            },
            "split": {
              "type": "function"
            },
            "replace": {
              "type": "function"
            },
            "slice": {
              "type": "function"
            },
            "substring": {
              "type": "function"
            },
            "substr": {
              "type": "function"
            },
            "concat": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "easysearch:core": {
    "EasySearch": {
      "type": "object",
      "members": {
        "Index": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "search": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Engine": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "callConfigMethod": {
                  "type": "function",
                  "refID": 9
                },
                "checkSearchParam": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function",
                  "refID": 13
                }
              }
            }
          }
        },
        "ReactiveEngine": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function",
                  "refID": 19
                },
                "transformSearchDefinition": {
                  "type": "function",
                  "refID": 21
                },
                "checkSearchParam": {
                  "type": "function",
                  "refID": 23
                },
                "search": {
                  "type": "function",
                  "refID": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        },
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "isReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoDB": {
          "type": "function",
          "members": {
            "defaultMongoConfiguration": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "getFindOptions": {
                  "type": "function",
                  "refID": 43
                },
                "getSearchCursor": {
                  "type": "function",
                  "refID": 45
                },
                "onIndexCreate": {
                  "ref": 19
                },
                "transformSearchDefinition": {
                  "ref": 21
                },
                "checkSearchParam": {
                  "ref": 23
                },
                "search": {
                  "ref": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        },
        "Minimongo": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "search": {
                  "type": "function"
                },
                "checkSearchParam": {
                  "ref": 23
                },
                "transformSearchDefinition": {
                  "ref": 21
                },
                "getFindOptions": {
                  "type": "function"
                },
                "callConfigMethod": {
                  "ref": 9
                },
                "onIndexCreate": {
                  "ref": 13
                }
              }
            }
          }
        },
        "MongoTextIndex": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function"
                },
                "transformSearchDefinition": {
                  "type": "function"
                },
                "checkSearchParam": {
                  "type": "function"
                },
                "getSearchCursor": {
                  "ref": 45
                },
                "getFindOptions": {
                  "ref": 43
                },
                "search": {
                  "ref": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        }
      }
    }
  },
  "peerlibrary:assert": {
    "assert": {
      "type": "function",
      "refID": 0,
      "members": {
        "AssertionError": {
          "type": "function",
          "members": {
            "super_": {
              "type": "function",
              "members": {
                "captureStackTrace": {
                  "type": "function"
                },
                "stackTraceLimit": {
                  "type": "infinity",
                  "value": "infinity"
                },
                "prepareStackTrace": {
                  "type": "function"
                }
              }
            }
          }
        },
        "fail": {
          "type": "function"
        },
        "ok": {
          "ref": 0
        },
        "equal": {
          "type": "function"
        },
        "notEqual": {
          "type": "function"
        },
        "deepEqual": {
          "type": "function"
        },
        "notDeepEqual": {
          "type": "function"
        },
        "strictEqual": {
          "type": "function"
        },
        "notStrictEqual": {
          "type": "function"
        },
        "throws": {
          "type": "function"
        },
        "doesNotThrow": {
          "type": "function"
        },
        "ifError": {
          "type": "function"
        }
      }
    }
  },
  "peerlibrary:base-component": {
    "BaseComponent": {
      "type": "function",
      "members": {
        "components": {
          "type": "object"
        },
        "register": {
          "type": "function"
        },
        "getComponent": {
          "type": "function"
        },
        "componentName": {
          "type": "function"
        },
        "renderComponent": {
          "type": "function"
        },
        "extendComponent": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "componentName": {
              "type": "function"
            },
            "componentChildren": {
              "type": "function"
            },
            "componentChildrenWith": {
              "type": "function"
            },
            "addComponentChild": {
              "type": "function"
            },
            "removeComponentChild": {
              "type": "function"
            },
            "componentParent": {
              "type": "function"
            },
            "renderComponent": {
              "type": "function"
            }
          }
        }
      }
    },
    "BaseComponentDebug": {
      "type": "function",
      "members": {
        "startComponent": {
          "type": "function"
        },
        "endComponent": {
          "type": "function"
        },
        "startMarkedComponent": {
          "type": "function"
        },
        "endMarkedComponent": {
          "type": "function"
        },
        "dumpComponentSubtree": {
          "type": "function"
        },
        "componentRoot": {
          "type": "function"
        },
        "dumpComponentTree": {
          "type": "function"
        }
      }
    }
  },
  "peerlibrary:blaze-components": {
    "BlazeComponent": {
      "type": "function",
      "refID": 0,
      "members": {
        "components": {
          "type": "object"
        },
        "register": {
          "type": "function"
        },
        "getComponent": {
          "type": "function"
        },
        "componentName": {
          "type": "function"
        },
        "renderComponent": {
          "type": "function"
        },
        "extendComponent": {
          "type": "function"
        },
        "getComponentForElement": {
          "type": "function"
        },
        "currentData": {
          "type": "function"
        },
        "currentComponent": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "mixins": {
              "type": "function"
            },
            "mixinParent": {
              "type": "function"
            },
            "requireMixin": {
              "type": "function"
            },
            "createMixins": {
              "type": "function"
            },
            "getMixin": {
              "type": "function"
            },
            "callFirstWith": {
              "type": "function"
            },
            "getFirstWith": {
              "type": "function"
            },
            "renderComponent": {
              "type": "function"
            },
            "template": {
              "type": "function"
            },
            "onCreated": {
              "type": "function"
            },
            "onRendered": {
              "type": "function"
            },
            "onDestroyed": {
              "type": "function"
            },
            "isCreated": {
              "type": "function"
            },
            "isRendered": {
              "type": "function"
            },
            "isDestroyed": {
              "type": "function"
            },
            "insertDOMElement": {
              "type": "function"
            },
            "moveDOMElement": {
              "type": "function"
            },
            "removeDOMElement": {
              "type": "function"
            },
            "events": {
              "type": "function"
            },
            "data": {
              "type": "function"
            },
            "currentData": {
              "type": "function"
            },
            "component": {
              "type": "function"
            },
            "currentComponent": {
              "type": "function"
            },
            "firstNode": {
              "type": "function"
            },
            "lastNode": {
              "type": "function"
            },
            "$": {
              "type": "function"
            },
            "findAll": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "autorun": {
              "type": "function"
            },
            "subscribe": {
              "type": "function"
            },
            "subscriptionsReady": {
              "type": "function"
            },
            "componentName": {
              "type": "function"
            },
            "componentChildren": {
              "type": "function"
            },
            "componentChildrenWith": {
              "type": "function"
            },
            "addComponentChild": {
              "type": "function"
            },
            "removeComponentChild": {
              "type": "function"
            },
            "componentParent": {
              "type": "function"
            }
          }
        }
      }
    },
    "BlazeComponentDebug": {
      "type": "function",
      "refID": 0,
      "members": {
        "startComponent": {
          "type": "function"
        },
        "endComponent": {
          "type": "function"
        },
        "startMarkedComponent": {
          "type": "function"
        },
        "endMarkedComponent": {
          "type": "function"
        },
        "dumpComponentSubtree": {
          "type": "function"
        },
        "componentRoot": {
          "type": "function"
        },
        "dumpComponentTree": {
          "type": "function"
        },
        "dumpAllComponents": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            }
          }
        }
      }
    }
  },
  "easysearch:components": {
    "EasySearch": {
      "type": "object",
      "members": {
        "Index": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "search": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Engine": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "callConfigMethod": {
                  "type": "function",
                  "refID": 9
                },
                "checkSearchParam": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function",
                  "refID": 13
                }
              }
            }
          }
        },
        "ReactiveEngine": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function",
                  "refID": 19
                },
                "transformSearchDefinition": {
                  "type": "function",
                  "refID": 21
                },
                "checkSearchParam": {
                  "type": "function",
                  "refID": 23
                },
                "search": {
                  "type": "function",
                  "refID": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        },
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "isReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoDB": {
          "type": "function",
          "members": {
            "defaultMongoConfiguration": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "getFindOptions": {
                  "type": "function",
                  "refID": 43
                },
                "getSearchCursor": {
                  "type": "function",
                  "refID": 45
                },
                "onIndexCreate": {
                  "ref": 19
                },
                "transformSearchDefinition": {
                  "ref": 21
                },
                "checkSearchParam": {
                  "ref": 23
                },
                "search": {
                  "ref": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        },
        "Minimongo": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "search": {
                  "type": "function"
                },
                "checkSearchParam": {
                  "ref": 23
                },
                "transformSearchDefinition": {
                  "ref": 21
                },
                "getFindOptions": {
                  "type": "function"
                },
                "callConfigMethod": {
                  "ref": 9
                },
                "onIndexCreate": {
                  "ref": 13
                }
              }
            }
          }
        },
        "MongoTextIndex": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function"
                },
                "transformSearchDefinition": {
                  "type": "function"
                },
                "checkSearchParam": {
                  "type": "function"
                },
                "getSearchCursor": {
                  "ref": 45
                },
                "getFindOptions": {
                  "ref": 43
                },
                "search": {
                  "ref": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        }
      }
    }
  },
  "easy:search": {
    "EasySearch": {
      "type": "object",
      "members": {
        "Index": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "search": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Engine": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "callConfigMethod": {
                  "type": "function",
                  "refID": 9
                },
                "checkSearchParam": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function",
                  "refID": 13
                }
              }
            }
          }
        },
        "ReactiveEngine": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function",
                  "refID": 19
                },
                "transformSearchDefinition": {
                  "type": "function",
                  "refID": 21
                },
                "checkSearchParam": {
                  "type": "function",
                  "refID": 23
                },
                "search": {
                  "type": "function",
                  "refID": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        },
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "isReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MongoDB": {
          "type": "function",
          "members": {
            "defaultMongoConfiguration": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "getFindOptions": {
                  "type": "function",
                  "refID": 43
                },
                "getSearchCursor": {
                  "type": "function",
                  "refID": 45
                },
                "onIndexCreate": {
                  "ref": 19
                },
                "transformSearchDefinition": {
                  "ref": 21
                },
                "checkSearchParam": {
                  "ref": 23
                },
                "search": {
                  "ref": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        },
        "Minimongo": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "search": {
                  "type": "function"
                },
                "checkSearchParam": {
                  "ref": 23
                },
                "transformSearchDefinition": {
                  "ref": 21
                },
                "getFindOptions": {
                  "type": "function"
                },
                "callConfigMethod": {
                  "ref": 9
                },
                "onIndexCreate": {
                  "ref": 13
                }
              }
            }
          }
        },
        "MongoTextIndex": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "defaultConfiguration": {
                  "type": "function"
                },
                "onIndexCreate": {
                  "type": "function"
                },
                "transformSearchDefinition": {
                  "type": "function"
                },
                "checkSearchParam": {
                  "type": "function"
                },
                "getSearchCursor": {
                  "ref": 45
                },
                "getFindOptions": {
                  "ref": 43
                },
                "search": {
                  "ref": 25
                },
                "callConfigMethod": {
                  "ref": 9
                }
              }
            }
          }
        }
      }
    }
  },
  "yogiben:autoform-tags": {},
  "okgrow:analytics": {},
  "meteorhacks:subs-manager": {
    "SubsManager": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "subscribe": {
              "type": "function"
            },
            "reset": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "ready": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "velocity:html-reporter": {},
  "practicalmeteor:loglevel": {
    "loglevel": {
      "type": "object",
      "members": {
        "createLogger": {
          "type": "function"
        },
        "createPackageLogger": {
          "type": "function"
        },
        "createAppLogger": {
          "type": "function"
        }
      }
    }
  },
  "velocity:chokidar": {
    "chokidar": {
      "type": "object",
      "members": {
        "FSWatcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "add": {
                  "type": "function"
                },
                "unwatch": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "type": "function"
                },
                "emit": {
                  "type": "function"
                },
                "addListener": {
                  "type": "function",
                  "refID": 13
                },
                "on": {
                  "ref": 13
                },
                "once": {
                  "type": "function"
                },
                "removeListener": {
                  "type": "function"
                },
                "removeAllListeners": {
                  "type": "function"
                },
                "listeners": {
                  "type": "function"
                }
              }
            }
          }
        },
        "watch": {
          "type": "function"
        }
      }
    }
  },
  "velocity:meteor-internals": {
    "VelocityMeteorInternals": {
      "type": "object",
      "members": {
        "parseStack": {
          "type": "object",
          "members": {
            "markBottom": {
              "type": "function"
            }
          }
        },
        "buildmessage": {
          "type": "object",
          "members": {
            "markBoundary": {
              "type": "function"
            }
          }
        },
        "files": {
          "type": "object",
          "members": {
            "cwd": {
              "type": "function"
            },
            "findAppDir": {
              "type": "function"
            },
            "findPackageDir": {
              "type": "function"
            },
            "statOrNull": {
              "type": "function"
            },
            "runJavaScript": {
              "type": "function"
            },
            "FancySyntaxError": {
              "type": "function"
            },
            "writeFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "writeFile"
                }
              }
            },
            "appendFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "appendFile"
                }
              }
            },
            "readFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readFile"
                }
              }
            },
            "stat": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "stat"
                }
              }
            },
            "lstat": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "lstat"
                }
              }
            },
            "exists": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "exists"
                }
              }
            },
            "rename": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "rename"
                }
              }
            },
            "realpath": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "realpath"
                }
              }
            },
            "readdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readdir"
                }
              }
            },
            "rmdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "rmdir"
                }
              }
            },
            "mkdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "mkdir"
                }
              }
            },
            "unlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "unlink"
                }
              }
            },
            "chmod": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "chmod"
                }
              }
            },
            "open": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "open"
                }
              }
            },
            "read": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "read"
                }
              }
            },
            "write": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "write"
                }
              }
            },
            "close": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "close"
                }
              }
            },
            "symlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "symlink"
                }
              }
            },
            "readlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readlink"
                }
              }
            },
            "createReadStream": {
              "type": "function"
            },
            "createWriteStream": {
              "type": "function"
            },
            "watchFile": {
              "type": "function"
            },
            "unwatchFile": {
              "type": "function"
            },
            "pathJoin": {
              "type": "function"
            },
            "pathNormalize": {
              "type": "function"
            },
            "pathRelative": {
              "type": "function"
            },
            "pathResolve": {
              "type": "function"
            },
            "pathDirname": {
              "type": "function"
            },
            "pathBasename": {
              "type": "function"
            },
            "pathExtname": {
              "type": "function"
            },
            "pathSep": {
              "type": "constant",
              "value": "/"
            },
            "pathDelimiter": {
              "type": "constant",
              "value": ":"
            },
            "pathOsDelimiter": {
              "type": "constant",
              "value": ":"
            },
            "convertToStandardPath": {
              "type": "function"
            },
            "convertToOSPath": {
              "type": "function"
            },
            "convertToWindowsPath": {
              "type": "function"
            },
            "convertToPosixPath": {
              "type": "function"
            },
            "convertToStandardLineEndings": {
              "type": "function"
            },
            "convertToOSLineEndings": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "velocity:source-map-support": {
    "SourceMapSupport": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:long-running-child-process": {
    "LongRunningChildProcess": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "taskName": {
              "type": "null",
              "value": null
            },
            "child": {
              "type": "null",
              "value": null
            },
            "pid": {
              "type": "null",
              "value": null
            },
            "getTaskName": {
              "type": "function"
            },
            "getChild": {
              "type": "function"
            },
            "getPid": {
              "type": "function"
            },
            "isDead": {
              "type": "function"
            },
            "isRunning": {
              "type": "function"
            },
            "readPid": {
              "type": "function"
            },
            "spawn": {
              "type": "function"
            },
            "kill": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "sanjo:meteor-version": {
    "MeteorVersion": {
      "type": "object",
      "members": {
        "getSemanticVersion": {
          "type": "function"
        }
      }
    }
  },
  "package-version-parser": {
    "PackageVersion": {
      "type": "function",
      "members": {
        "parse": {
          "type": "function"
        },
        "versionMagnitude": {
          "type": "function"
        },
        "lessThan": {
          "type": "function"
        },
        "majorVersion": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "getValidServerVersion": {
          "type": "function"
        },
        "VersionConstraint": {
          "type": "function"
        },
        "parseVersionConstraint": {
          "type": "function"
        },
        "PackageConstraint": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parsePackageConstraint": {
          "type": "function"
        },
        "validatePackageName": {
          "type": "function"
        },
        "invalidFirstFormatConstraint": {
          "type": "function"
        },
        "removeBuildID": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:meteor-files-helpers": {
    "MeteorFilesHelpers": {
      "type": "object",
      "members": {
        "getAppPath": {
          "type": "function"
        },
        "getMeteorToolPath": {
          "type": "function"
        },
        "getMeteorInstallationPath": {
          "type": "function"
        },
        "getNodeModulePath": {
          "type": "function"
        },
        "getPackageVersions": {
          "type": "function"
        },
        "getPackageVersion": {
          "type": "function"
        },
        "isPackageInstalled": {
          "type": "function"
        }
      }
    }
  },
  "velocity:core": {
    "Velocity": {
      "type": "object",
      "members": {
        "Collections": {
          "type": "object",
          "members": {
            "TestFiles": {
              "type": "object",
              "members": {
                "constructor": {
                  "type": "function",
                  "refID": 3,
                  "members": {
                    "Cursor": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "rewind": {
                              "type": "function"
                            },
                            "forEach": {
                              "type": "function"
                            },
                            "getTransform": {
                              "type": "function"
                            },
                            "map": {
                              "type": "function"
                            },
                            "fetch": {
                              "type": "function"
                            },
                            "count": {
                              "type": "function"
                            },
                            "observe": {
                              "type": "function"
                            },
                            "observeChanges": {
                              "type": "function"
                            }
                          }
                        }
                      }
                    },
                    "ObjectID": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "toString": {
                              "type": "function"
                            },
                            "equals": {
                              "type": "function"
                            },
                            "clone": {
                              "type": "function"
                            },
                            "typeName": {
                              "type": "function"
                            },
                            "getTimestamp": {
                              "type": "function"
                            },
                            "toHexString": {
                              "type": "function",
                              "refID": 34
                            },
                            "toJSONValue": {
                              "ref": 34
                            },
                            "valueOf": {
                              "ref": 34
                            }
                          }
                        }
                      }
                    },
                    "get": {
                      "type": "function"
                    },
                    "getAll": {
                      "type": "function"
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "constructor": {
                          "ref": 3
                        },
                        "find": {
                          "type": "function",
                          "refID": 41
                        },
                        "findOne": {
                          "type": "function",
                          "refID": 43
                        },
                        "insert": {
                          "type": "function",
                          "refID": 45
                        },
                        "update": {
                          "type": "function",
                          "refID": 47
                        },
                        "remove": {
                          "type": "function",
                          "refID": 49
                        },
                        "upsert": {
                          "type": "function",
                          "refID": 51
                        },
                        "rawCollection": {
                          "type": "function",
                          "refID": 53
                        },
                        "rawDatabase": {
                          "type": "function",
                          "refID": 55
                        },
                        "allow": {
                          "type": "function",
                          "refID": 57
                        },
                        "deny": {
                          "type": "function",
                          "refID": 59
                        },
                        "attachSchema": {
                          "type": "function",
                          "refID": 61
                        },
                        "simpleSchema": {
                          "type": "function",
                          "refID": 63
                        }
                      }
                    }
                  }
                },
                "find": {
                  "ref": 41
                },
                "findOne": {
                  "ref": 43
                },
                "insert": {
                  "ref": 45
                },
                "update": {
                  "ref": 47
                },
                "remove": {
                  "ref": 49
                },
                "upsert": {
                  "ref": 51
                },
                "rawCollection": {
                  "ref": 53
                },
                "rawDatabase": {
                  "ref": 55
                },
                "allow": {
                  "ref": 57
                },
                "deny": {
                  "ref": 59
                },
                "attachSchema": {
                  "ref": 61
                },
                "simpleSchema": {
                  "ref": 63
                }
              }
            },
            "FixtureFiles": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 3
                },
                "find": {
                  "ref": 41
                },
                "findOne": {
                  "ref": 43
                },
                "insert": {
                  "ref": 45
                },
                "update": {
                  "ref": 47
                },
                "remove": {
                  "ref": 49
                },
                "upsert": {
                  "ref": 51
                },
                "rawCollection": {
                  "ref": 53
                },
                "rawDatabase": {
                  "ref": 55
                },
                "allow": {
                  "ref": 57
                },
                "deny": {
                  "ref": 59
                },
                "attachSchema": {
                  "ref": 61
                },
                "simpleSchema": {
                  "ref": 63
                }
              }
            },
            "TestReports": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 3
                },
                "find": {
                  "ref": 41
                },
                "findOne": {
                  "ref": 43
                },
                "insert": {
                  "ref": 45
                },
                "update": {
                  "ref": 47
                },
                "remove": {
                  "ref": 49
                },
                "upsert": {
                  "ref": 51
                },
                "rawCollection": {
                  "ref": 53
                },
                "rawDatabase": {
                  "ref": 55
                },
                "allow": {
                  "ref": 57
                },
                "deny": {
                  "ref": 59
                },
                "attachSchema": {
                  "ref": 61
                },
                "simpleSchema": {
                  "ref": 63
                }
              }
            },
            "AggregateReports": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 3
                },
                "find": {
                  "ref": 41
                },
                "findOne": {
                  "ref": 43
                },
                "insert": {
                  "ref": 45
                },
                "update": {
                  "ref": 47
                },
                "remove": {
                  "ref": 49
                },
                "upsert": {
                  "ref": 51
                },
                "rawCollection": {
                  "ref": 53
                },
                "rawDatabase": {
                  "ref": 55
                },
                "allow": {
                  "ref": 57
                },
                "deny": {
                  "ref": 59
                },
                "attachSchema": {
                  "ref": 61
                },
                "simpleSchema": {
                  "ref": 63
                }
              }
            },
            "Logs": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 3
                },
                "find": {
                  "ref": 41
                },
                "findOne": {
                  "ref": 43
                },
                "insert": {
                  "ref": 45
                },
                "update": {
                  "ref": 47
                },
                "remove": {
                  "ref": 49
                },
                "upsert": {
                  "ref": 51
                },
                "rawCollection": {
                  "ref": 53
                },
                "rawDatabase": {
                  "ref": 55
                },
                "allow": {
                  "ref": 57
                },
                "deny": {
                  "ref": 59
                },
                "attachSchema": {
                  "ref": 61
                },
                "simpleSchema": {
                  "ref": 63
                }
              }
            },
            "Mirrors": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 3
                },
                "find": {
                  "ref": 41
                },
                "findOne": {
                  "ref": 43
                },
                "insert": {
                  "ref": 45
                },
                "update": {
                  "ref": 47
                },
                "remove": {
                  "ref": 49
                },
                "upsert": {
                  "ref": 51
                },
                "rawCollection": {
                  "ref": 53
                },
                "rawDatabase": {
                  "ref": 55
                },
                "allow": {
                  "ref": 57
                },
                "deny": {
                  "ref": 59
                },
                "attachSchema": {
                  "ref": 61
                },
                "simpleSchema": {
                  "ref": 63
                }
              }
            },
            "Options": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 3
                },
                "find": {
                  "ref": 41
                },
                "findOne": {
                  "ref": 43
                },
                "insert": {
                  "ref": 45
                },
                "update": {
                  "ref": 47
                },
                "remove": {
                  "ref": 49
                },
                "upsert": {
                  "ref": 51
                },
                "rawCollection": {
                  "ref": 53
                },
                "rawDatabase": {
                  "ref": 55
                },
                "allow": {
                  "ref": 57
                },
                "deny": {
                  "ref": 59
                },
                "attachSchema": {
                  "ref": 61
                },
                "simpleSchema": {
                  "ref": 63
                }
              }
            }
          }
        },
        "Methods": {
          "type": "object",
          "members": {
            "velocity/logs/reset": {
              "type": "function"
            },
            "velocity/logs/submit": {
              "type": "function"
            },
            "velocity/mirrors/init": {
              "type": "function"
            },
            "velocity/mirrors/register": {
              "type": "function"
            },
            "velocity/mirrors/request": {
              "type": "function"
            },
            "velocity/parentHandshake": {
              "type": "function"
            },
            "velocity/getOption": {
              "type": "function"
            },
            "velocity/setOption": {
              "type": "function"
            },
            "velocity/setOptions": {
              "type": "function"
            },
            "velocity/reports/completed": {
              "type": "function"
            },
            "velocity/reports/reset": {
              "type": "function"
            },
            "velocity/reports/submit": {
              "type": "function"
            },
            "velocity/copySampleTests": {
              "type": "function"
            },
            "velocity/featureTestDone": {
              "type": "function"
            },
            "velocity/featureTestFailed": {
              "type": "function"
            },
            "velocity/isEnabled": {
              "type": "function"
            },
            "velocity/isMirror": {
              "type": "function"
            },
            "velocity/register/framework": {
              "type": "function"
            },
            "velocity/reset": {
              "type": "function"
            },
            "velocity/returnTODOTestAndMarkItAsDOING": {
              "type": "function"
            }
          }
        },
        "mirrorMeteorReleaseName": {
          "type": "constant",
          "value": "velocity:METEOR"
        },
        "mirrorMeteorVersion": {
          "type": "constant",
          "value": "1.2.0.2_1"
        },
        "mirrorMeteorRelease": {
          "type": "constant",
          "value": "velocity:METEOR@1.2.0.2_1"
        },
        "mirrorMeteorToolReleaseName": {
          "type": "constant",
          "value": "velocity:meteor-tool"
        },
        "mirrorMeteorToolVersion": {
          "type": "constant",
          "value": "1.1.9_1"
        },
        "mirrorMeteorToolRelease": {
          "type": "constant",
          "value": "velocity:meteor-tool@1.1.9_1"
        },
        "reusableMirrors": {
          "type": "array"
        },
        "startup": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getTestsPath": {
          "type": "function"
        },
        "getPackagesPath": {
          "type": "function"
        },
        "getPackagePath": {
          "type": "function"
        },
        "postProcessors": {
          "type": "array"
        },
        "addPostProcessor": {
          "type": "function"
        },
        "getReportGithubIssueMessage": {
          "type": "function"
        },
        "registerTestingFramework": {
          "type": "function"
        },
        "unregisterTestingFramework": {
          "type": "function"
        },
        "onTest": {
          "type": "function"
        },
        "setOption": {
          "type": "function"
        },
        "setOptions": {
          "type": "function"
        },
        "getOption": {
          "type": "function"
        }
      }
    },
    "VelocityTestFiles": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 39
                },
                "findOne": {
                  "type": "function",
                  "refID": 41
                },
                "insert": {
                  "type": "function",
                  "refID": 43
                },
                "update": {
                  "type": "function",
                  "refID": 45
                },
                "remove": {
                  "type": "function",
                  "refID": 47
                },
                "upsert": {
                  "type": "function",
                  "refID": 49
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 51
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 59
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "find": {
          "ref": 39
        },
        "findOne": {
          "ref": 41
        },
        "insert": {
          "ref": 43
        },
        "update": {
          "ref": 45
        },
        "remove": {
          "ref": 47
        },
        "upsert": {
          "ref": 49
        },
        "rawCollection": {
          "ref": 51
        },
        "rawDatabase": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        },
        "attachSchema": {
          "ref": 59
        },
        "simpleSchema": {
          "ref": 61
        }
      }
    },
    "VelocityFixtureFiles": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 39
                },
                "findOne": {
                  "type": "function",
                  "refID": 41
                },
                "insert": {
                  "type": "function",
                  "refID": 43
                },
                "update": {
                  "type": "function",
                  "refID": 45
                },
                "remove": {
                  "type": "function",
                  "refID": 47
                },
                "upsert": {
                  "type": "function",
                  "refID": 49
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 51
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 59
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "find": {
          "ref": 39
        },
        "findOne": {
          "ref": 41
        },
        "insert": {
          "ref": 43
        },
        "update": {
          "ref": 45
        },
        "remove": {
          "ref": 47
        },
        "upsert": {
          "ref": 49
        },
        "rawCollection": {
          "ref": 51
        },
        "rawDatabase": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        },
        "attachSchema": {
          "ref": 59
        },
        "simpleSchema": {
          "ref": 61
        }
      }
    },
    "VelocityTestReports": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 39
                },
                "findOne": {
                  "type": "function",
                  "refID": 41
                },
                "insert": {
                  "type": "function",
                  "refID": 43
                },
                "update": {
                  "type": "function",
                  "refID": 45
                },
                "remove": {
                  "type": "function",
                  "refID": 47
                },
                "upsert": {
                  "type": "function",
                  "refID": 49
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 51
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 59
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "find": {
          "ref": 39
        },
        "findOne": {
          "ref": 41
        },
        "insert": {
          "ref": 43
        },
        "update": {
          "ref": 45
        },
        "remove": {
          "ref": 47
        },
        "upsert": {
          "ref": 49
        },
        "rawCollection": {
          "ref": 51
        },
        "rawDatabase": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        },
        "attachSchema": {
          "ref": 59
        },
        "simpleSchema": {
          "ref": 61
        }
      }
    },
    "VelocityAggregateReports": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 39
                },
                "findOne": {
                  "type": "function",
                  "refID": 41
                },
                "insert": {
                  "type": "function",
                  "refID": 43
                },
                "update": {
                  "type": "function",
                  "refID": 45
                },
                "remove": {
                  "type": "function",
                  "refID": 47
                },
                "upsert": {
                  "type": "function",
                  "refID": 49
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 51
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 59
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "find": {
          "ref": 39
        },
        "findOne": {
          "ref": 41
        },
        "insert": {
          "ref": 43
        },
        "update": {
          "ref": 45
        },
        "remove": {
          "ref": 47
        },
        "upsert": {
          "ref": 49
        },
        "rawCollection": {
          "ref": 51
        },
        "rawDatabase": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        },
        "attachSchema": {
          "ref": 59
        },
        "simpleSchema": {
          "ref": 61
        }
      }
    },
    "VelocityLogs": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 39
                },
                "findOne": {
                  "type": "function",
                  "refID": 41
                },
                "insert": {
                  "type": "function",
                  "refID": 43
                },
                "update": {
                  "type": "function",
                  "refID": 45
                },
                "remove": {
                  "type": "function",
                  "refID": 47
                },
                "upsert": {
                  "type": "function",
                  "refID": 49
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 51
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 59
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "find": {
          "ref": 39
        },
        "findOne": {
          "ref": 41
        },
        "insert": {
          "ref": 43
        },
        "update": {
          "ref": 45
        },
        "remove": {
          "ref": 47
        },
        "upsert": {
          "ref": 49
        },
        "rawCollection": {
          "ref": 51
        },
        "rawDatabase": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        },
        "attachSchema": {
          "ref": 59
        },
        "simpleSchema": {
          "ref": 61
        }
      }
    },
    "VelocityMirrors": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 39
                },
                "findOne": {
                  "type": "function",
                  "refID": 41
                },
                "insert": {
                  "type": "function",
                  "refID": 43
                },
                "update": {
                  "type": "function",
                  "refID": 45
                },
                "remove": {
                  "type": "function",
                  "refID": 47
                },
                "upsert": {
                  "type": "function",
                  "refID": 49
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 51
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 59
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "find": {
          "ref": 39
        },
        "findOne": {
          "ref": 41
        },
        "insert": {
          "ref": 43
        },
        "update": {
          "ref": 45
        },
        "remove": {
          "ref": 47
        },
        "upsert": {
          "ref": 49
        },
        "rawCollection": {
          "ref": 51
        },
        "rawDatabase": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        },
        "attachSchema": {
          "ref": 59
        },
        "simpleSchema": {
          "ref": 61
        }
      }
    },
    "VelocityOptions": {
      "type": "object",
      "members": {
        "constructor": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "get": {
              "type": "function"
            },
            "getAll": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function",
                  "refID": 39
                },
                "findOne": {
                  "type": "function",
                  "refID": 41
                },
                "insert": {
                  "type": "function",
                  "refID": 43
                },
                "update": {
                  "type": "function",
                  "refID": 45
                },
                "remove": {
                  "type": "function",
                  "refID": 47
                },
                "upsert": {
                  "type": "function",
                  "refID": 49
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 51
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 53
                },
                "allow": {
                  "type": "function",
                  "refID": 55
                },
                "deny": {
                  "type": "function",
                  "refID": 57
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 59
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 61
                }
              }
            }
          }
        },
        "find": {
          "ref": 39
        },
        "findOne": {
          "ref": 41
        },
        "insert": {
          "ref": 43
        },
        "update": {
          "ref": 45
        },
        "remove": {
          "ref": 47
        },
        "upsert": {
          "ref": 49
        },
        "rawCollection": {
          "ref": 51
        },
        "rawDatabase": {
          "ref": 53
        },
        "allow": {
          "ref": 55
        },
        "deny": {
          "ref": 57
        },
        "attachSchema": {
          "ref": 59
        },
        "simpleSchema": {
          "ref": 61
        }
      }
    }
  },
  "velocity:shim": {},
  "velocity:meteor-stubs": {
    "MeteorStubs": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        },
        "uninstall": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:karma": {
    "Karma": {
      "type": "object",
      "members": {
        "start": {
          "type": "function"
        },
        "setConfig": {
          "type": "function"
        }
      }
    },
    "KarmaInternals": {
      "type": "object",
      "members": {
        "karmaChilds": {
          "type": "object",
          "members": {
            "jasmine-client-unit": {
              "type": "object",
              "members": {
                "taskName": {
                  "type": "constant",
                  "value": "jasmine-client-unit"
                },
                "appPath": {
                  "type": "constant",
                  "value": "/Users/otniel/WebstormProjects/prototypeB1"
                },
                "pid": {
                  "type": "constant",
                  "value": 29090
                },
                "fout": {
                  "type": "constant",
                  "value": 32
                },
                "child": {
                  "type": "object",
                  "members": {
                    "domain": {
                      "type": "null",
                      "value": null
                    },
                    "signalCode": {
                      "type": "null",
                      "value": null
                    },
                    "exitCode": {
                      "type": "null",
                      "value": null
                    },
                    "pid": {
                      "type": "constant",
                      "value": 29090
                    },
                    "stdin": {
                      "type": "null",
                      "value": null
                    },
                    "stdout": {
                      "type": "null",
                      "value": null
                    },
                    "stderr": {
                      "type": "null",
                      "value": null
                    },
                    "stdio": {
                      "type": "array"
                    },
                    "spawn": {
                      "type": "function"
                    },
                    "kill": {
                      "type": "function"
                    },
                    "ref": {
                      "type": "function"
                    },
                    "unref": {
                      "type": "function"
                    },
                    "setMaxListeners": {
                      "type": "function"
                    },
                    "emit": {
                      "type": "function"
                    },
                    "addListener": {
                      "type": "function",
                      "refID": 17
                    },
                    "on": {
                      "ref": 17
                    },
                    "once": {
                      "type": "function"
                    },
                    "removeListener": {
                      "type": "function"
                    },
                    "removeAllListeners": {
                      "type": "function"
                    },
                    "listeners": {
                      "type": "function"
                    }
                  }
                },
                "getTaskName": {
                  "type": "function"
                },
                "getChild": {
                  "type": "function"
                },
                "getPid": {
                  "type": "function"
                },
                "isDead": {
                  "type": "function"
                },
                "isRunning": {
                  "type": "function"
                },
                "readPid": {
                  "type": "function"
                },
                "spawn": {
                  "type": "function"
                },
                "kill": {
                  "type": "function"
                }
              }
            }
          }
        },
        "getKarmaChild": {
          "type": "function"
        },
        "setKarmaChild": {
          "type": "function"
        },
        "startKarmaServer": {
          "type": "function"
        },
        "writeKarmaConfig": {
          "type": "function"
        },
        "generateKarmaConfig": {
          "type": "function"
        },
        "readKarmaConfig": {
          "type": "function"
        },
        "getConfigPath": {
          "type": "function"
        },
        "getKarmaPath": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:jasmine": {
    "Jasmine": {
      "type": "object",
      "members": {
        "onTest": {
          "type": "function"
        },
        "setKarmaConfig": {
          "type": "function"
        }
      }
    }
  },
  "spiderable": {
    "Spiderable": {
      "type": "object",
      "members": {
        "userAgentRegExps": {
          "type": "array"
        },
        "requestTimeoutMs": {
          "type": "constant",
          "value": 15000
        }
      }
    }
  },
  "dfischer:phantomjs": {},
  "jsx": {},
  "kadira:dochead": {
    "DocHead": {
      "type": "object",
      "members": {
        "currentTitle": {
          "type": "null",
          "value": null
        },
        "setTitle": {
          "type": "function"
        },
        "addMeta": {
          "type": "function"
        },
        "addLink": {
          "type": "function"
        },
        "getTitle": {
          "type": "function"
        },
        "loadScript": {
          "type": "function"
        },
        "removeDocHeadAddedTags": {
          "type": "function"
        }
      }
    }
  },
  "meteorhacks:async": {
    "Async": {
      "type": "object",
      "members": {
        "runSync": {
          "type": "function"
        },
        "wrap": {
          "type": "function"
        }
      }
    }
  },
  "hot-code-push": {},
  "autoupdate": {
    "Autoupdate": {
      "type": "object",
      "members": {
        "autoupdateVersion": {
          "type": "constant",
          "value": "86b9dbcad254cb95c17d566856df2d8eb0bcde4b"
        },
        "autoupdateVersionRefreshable": {
          "type": "constant",
          "value": "a7948ed1215c52615f6be7422f2002df4e702de8"
        },
        "autoupdateVersionCordova": {
          "type": "constant",
          "value": "none"
        },
        "appId": {
          "type": "constant",
          "value": "1ipv1tp12xzfzhba088c"
        }
      }
    }
  },
  "reload": {}
}
var globalContext = (typeof global !== 'undefined') ? global : window

for (var packageName in packageMetadata) {
  for (var packageExportName in packageMetadata[packageName]) {
    var packageExport = packageMetadata[packageName][packageExportName]
    globalContext[packageExportName] = ComponentMocker.generateFromMetadata(packageExport)
  }
}
